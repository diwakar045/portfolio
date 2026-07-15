let audioCtx = null;

export const playBeep = () => {
  // Create audio context only on user interaction (or when first needed)
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  // Resume context if suspended
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc.type = 'sine'; // A sine wave gives a clean, technical beep
  osc.frequency.value = 800; // Frequency in Hz

  // Very quick, subtle volume envelope
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.1);
};
