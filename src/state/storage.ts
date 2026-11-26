import type { PlayerId, SaveState } from '../types';

const STORAGE_KEY = 'whisperwind-chronicles-save-v1';

export function createDefaultSave(): SaveState {
  return {
    profiles: {
      mackenzie: {
        id: 'mackenzie',
        name: 'Mackenzie',
        readingTier: 'grade3',
        companion: 'doggy',
        accentColor: '#c94a5a',
        avatarHair: '#7a4b2a',
        avatarTunic: '#c94a5a',
        equippedHat: null,
        equippedCompanionGear: null,
        totalStars: 0,
        chaptersMastered: 0,
        perfectChapters: 0,
        unlockedRelics: [],
        unlockedEndings: [],
        questBestStars: {},
      },
      elizabeth: {
        id: 'elizabeth',
        name: 'Elizabeth',
        readingTier: 'grade5',
        companion: 'slothy',
        accentColor: '#1f7a6e',
        avatarHair: '#4a3121',
        avatarTunic: '#1f7a6e',
        equippedHat: null,
        equippedCompanionGear: null,
        totalStars: 0,
        chaptersMastered: 0,
        perfectChapters: 0,
        unlockedRelics: [],
        unlockedEndings: [],
        questBestStars: {},
      },
    },
    settings: {
      fontSize: 'cozy',
      fontStyle: 'serif',
      soundEnabled: true,
    },
  };
}

export function loadSave(): SaveState {
  const defaults = createDefaultSave();
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<SaveState>;
    return {
      profiles: {
        mackenzie: { ...defaults.profiles.mackenzie, ...(parsed.profiles?.mackenzie ?? {}) },
        elizabeth: { ...defaults.profiles.elizabeth, ...(parsed.profiles?.elizabeth ?? {}) },
      },
      settings: {
        ...defaults.settings,
        ...(parsed.settings ?? {}),
      },
    };
  } catch {
    return defaults;
  }
}

export function persistSave(state: SaveState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota issues gracefully
  }
}

export function applyQuestCompletion(
  state: SaveState,
  recipientIds: PlayerId[],
  questId: string,
  earnedStars: number,
  chaptersCount: number,
  perfectCount: number,
  relicId: string,
  endingId: string
): SaveState {
  const nextProfiles = { ...state.profiles };

  for (const id of recipientIds) {
    const p = nextProfiles[id];
    const prevBest = p.questBestStars[questId] ?? 0;
    const relics = p.unlockedRelics.includes(relicId) ? p.unlockedRelics : [...p.unlockedRelics, relicId];
    const endings = p.unlockedEndings.includes(endingId) ? p.unlockedEndings : [...p.unlockedEndings, endingId];

    nextProfiles[id] = {
      ...p,
      totalStars: p.totalStars + earnedStars,
      chaptersMastered: p.chaptersMastered + chaptersCount,
      perfectChapters: p.perfectChapters + perfectCount,
      unlockedRelics: relics,
      unlockedEndings: endings,
      questBestStars: {
        ...p.questBestStars,
        [questId]: Math.max(prevBest, earnedStars),
      },
    };
  }

  return {
    ...state,
    profiles: nextProfiles,
  };
}
