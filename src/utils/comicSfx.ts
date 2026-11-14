export type ComicSfxTone = 'alert' | 'boing' | 'clunk' | 'ding' | 'sigh' | 'zap';

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;
  if (!sharedAudioCtx) {
    sharedAudioCtx = new AudioCtx();
  }
  if (sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

export function playComicSfx(tone: ComicSfxTone) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.14, now);
  master.connect(ctx.destination);

  if (tone === 'alert') {
    // Two-tone cartoon klaxon
    [0, 0.16].forEach((offset) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(660, now + offset);
      osc.frequency.linearRampToValueAtTime(440, now + offset + 0.13);
      g.gain.setValueAtTime(0.5, now + offset);
      g.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.14);
      osc.connect(g);
      g.connect(master);
      osc.start(now + offset);
      osc.stop(now + offset + 0.15);
    });
  } else if (tone === 'boing') {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.28);
    g.gain.setValueAtTime(0.7, now + 0);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 0.31);
  } else if (tone === 'clunk') {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.14);
    g.gain.setValueAtTime(0.65, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 0.16);
  } else if (tone === 'ding') {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.setValueAtTime(1318, now + 0.08);
    g.gain.setValueAtTime(0.55, now);
    g.gain.exponentialRampToValueAtTime(0.008, now + 0.45);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 0.46);
  } else if (tone === 'zap') {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(920, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.19);
    g.gain.setValueAtTime(0.45, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 0.21);
  } else {
    // sigh: descending trombone slide
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(310, now);
    osc.frequency.exponentialRampToValueAtTime(145, now + 0.35);
    g.gain.setValueAtTime(0.55, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.37);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 0.38);
  }
}
