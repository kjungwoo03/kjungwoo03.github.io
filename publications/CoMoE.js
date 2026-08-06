export default {
  id: "CoMoE",
  releaseDate: "2026-07-10",
  venueType: "workshop",
  venueLabel: "ICML Workshop",
  title: "Probing Token Spaces under Generator Shift in AI-Generated Music Detection",
  authors: ["Joonyong Park", "Jungwoo Kim", "Junyoung Koh", "Yuki Saito"],
  venue: "ICML Workshop on Machine Learning for Audio",
  abstract:
    "We study source-restricted evaluation on MoM-open, an open reconstruction of MoM-CLAM that preserves its fake-generator protocol. CoMoE provides a compact fixed classifier for comparing heterogeneous audio token spaces under a controlled downstream architecture and training recipe. Standard and real-source-restricted splits are nearly saturated, while fake-source restriction exposes large differences between token spaces, showing that codec-style discrete token spaces are a primary experimental axis under generator shift.",
  links: {
    arxiv: "https://arxiv.org/abs/2606.08663",
    code: "https://github.com/MAAP-LAB/CoMoE",
  },
};
