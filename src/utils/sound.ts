let audioCtx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtor =
    window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtor) return null;
  if (!audioCtx) {
    audioCtx = new AudioCtor();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playTone(
  freq: number,
  duration: number,
  type: OscillatorType = 'sine',
  gainPeak = 0.08,
  delay = 0
): void {
  const ctx = getContext();
  if (!ctx) return;

  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainPeak, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

export const sfx = {
  pageTurn(enabled: boolean): void {
    if (!enabled) return;
    playTone(340, 0.12, 'triangle', 0.04, 0);
    playTone(460, 0.14, 'sine', 0.035, 0.06);
  },
  gatePass(enabled: boolean): void {
    if (!enabled) return;
    playTone(523.25, 0.18, 'triangle', 0.07, 0);
    playTone(659.25, 0.2, 'triangle', 0.07, 0.09);
    playTone(783.99, 0.28, 'sine', 0.08, 0.18);
  },
  gateNudge(enabled: boolean): void {
    if (!enabled) return;
    playTone(260, 0.16, 'sine', 0.06, 0);
    playTone(220, 0.22, 'sine', 0.05, 0.1);
  },
  companionPower(enabled: boolean): void {
    if (!enabled) return;
    playTone(440, 0.15, 'sine', 0.06, 0);
    playTone(587.33, 0.22, 'triangle', 0.07, 0.08);
  },
  questComplete(enabled: boolean): void {
    if (!enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, i) => playTone(n, 0.32, 'triangle', 0.08, i * 0.11));
  },
};
