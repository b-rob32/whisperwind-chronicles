import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const BASE_PATH = '/whisperwind-chronicles/';

/**
 * Generates an offline precaching Service Worker (sw.js) in dist/
 * containing every built asset + public art/icon/manifest with a deterministic content hash.
 */
function offlineServiceWorkerPlugin(): Plugin {
  return {
    name: 'whisperwind-offline-sw',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) return;

      const urls: string[] = [BASE_PATH, `${BASE_PATH}index.html`];
      const hash = createHash('sha256');

      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
          } else if (entry.name !== 'sw.js') {
            const rel = path.relative(distDir, full).split(path.sep).join('/');
            const url = `${BASE_PATH}${rel}`;
            if (!urls.includes(url)) urls.push(url);
            hash.update(rel);
            hash.update(fs.readFileSync(full));
          }
        }
      };

      walk(distDir);
      const cacheName = `whisperwind-${hash.digest('hex').slice(0, 12)}`;

      const swSource = `const CACHE_NAME = ${JSON.stringify(cacheName)};
const PRECACHE_URLS = ${JSON.stringify(urls, null, 2)};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(${JSON.stringify(`${BASE_PATH}index.html`)}).then((cached) =>
        cached || fetch(event.request).catch(() => caches.match(${JSON.stringify(BASE_PATH)}))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
`;

      fs.writeFileSync(path.join(distDir, 'sw.js'), swSource, 'utf-8');
    },
  };
}

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), offlineServiceWorkerPlugin()],
});
