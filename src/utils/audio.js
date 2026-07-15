let audioCtx = null;

// Initialize and unlock the audio context on the first user interaction 
// to satisfy modern browser autoplay policies.
const unlockAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('click', unlockAudioContext, { once: true });
  window.addEventListener('touchstart', unlockAudioContext, { once: true });
  window.addEventListener('keydown', unlockAudioContext, { once: true });
}

export const playBeep = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  // Attempt to resume. (May be ignored by the browser if no user gesture has occurred yet).
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  // If the context is still suspended (user hasn't clicked anywhere yet), 
  // abort playing the sound to prevent them from queuing up and blasting all at once later.
  if (audioCtx.state === 'suspended') {
    return;
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc.type = 'sine';
  osc.frequency.value = 800;

  // Very quick, subtle volume envelope
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.1);
};
