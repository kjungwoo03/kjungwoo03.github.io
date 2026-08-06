// TODO: Replace this provisional date with the exact preprint release date.
export default {
  id: "VESPA",
  releaseDate: "2026-08-01",
  venueType: "preprint",
  venueLabel: "Preprint",
  title: "VESPA: Voice-flexible Ensemble Separation via Pitch-informed Analysis",
  authors: ["Junyoung Koh", "Jungwoo Kim", "Zeynel Tok", "Thomas Sesmat", "Soo Yong Kim"],
  venue: "Preprint",
  abstract: "Separating individual singers from a vocal ensemble is challenging due to their shared timbre, extensive overlap in pitch and harmonics, and variable number. Blind separators are agnostic to the pitch and identity of each voice, while pitch-conditioned systems typically require externally supplied pitch contours or fixed voice assignments. We introduce VESPA, a transcribe-then-separate framework that repurposes the identity-consistent pitch slots of a frozen voice-flexible multi-pitch estimator as an interface to waveform reconstruction. For each slot, VESPA converts the predicted F0 trajectory into a harmonic prior and refines it with a lightweight temporal mask head on the mixture STFT. The system outputs per-voice pitch, activity, timbre embeddings, and waveforms while training only a 3.6 M-parameter separation head. On jaCappella mixtures held out from both the transcriber and the separation head, VESPA reaches 8.3 dB SI-SDR, on par on average with a strong in-domain baseline built on the TF-GridNet separator. It degrades far more gracefully as polyphony grows, leading this baseline by 1.1 dB at four voices and by 1.4 dB at five, where every blind separator we compare against falls below 0 dB while VESPA stays positive. VESPA further estimates the active source count without oracle knowledge. In a MUSHRA-style listening test it is preferred over the same baseline, with an 8.5-point higher mean score.",
  links: {},
};
