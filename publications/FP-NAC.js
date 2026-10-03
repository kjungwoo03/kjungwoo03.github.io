// TODO: Replace this provisional date with the exact preprint release date.
export default {
  id: "FP-NAC",
  releaseDate: "2026-09-20",
  venueType: "preprint",
  venueLabel: "Preprint",
  title: "Neural Audio Codec for Robust Audio Deepfake Detection",
  authors: ["Jungwoo Kim", "Joonyong Park", "Junyoung Koh", "Jong-Seok Lee"],
  venue: "Preprint",
  abstract: "Audio deepfake detectors are typically evaluated on uncompressed audio, although real-world audio often undergoes low-bitrate coding. In this work, we investigate how audio coding affects deepfake detection across codecs, bitrates, and detectors, finding higher errors at lower rates. A mixed-pair protocol isolates codec-induced changes in bona fide and spoof audio, revealing asymmetric, codec-dependent failures: low-rate DAC and EnCodec mainly degrade bona fide de- tection, whereas X-Codec shows a stronger spoof-side limitation. Motivated by these, we propose a forensic-preserving neural au- dio codec (FP-NAC), which fine-tunes a pretrained codec using a detector-guided objective while preserving its native hard quantiza- tion path and bitrate. On ASVspoof 2019 LA, FP-NAC reduces EER by up to 49.8 pp compared with the original DAC at 0.5 kbps while maintaining comparable reconstruction quality. Although supervised by only one detector, FP-NAC improves performance across multiple detectors, highlighting forensic transparency as a codec design objective alongside perceptual quality.",
  links: {
    arxiv: "http://arxiv.org/abs/2609.39651",
    code: "https://github.com/kjungwoo03/FP-NAC",
  },
};
