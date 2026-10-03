// TODO: Replace this provisional date with the exact preprint release date.
export default {
  id: "FP-NAC",
  releaseDate: "2026-09-21",
  venueType: "preprint",
  venueLabel: "Preprint",
  title: "Typographic Attack against VLM-based AI-generated Image Detection",
  coFirstAuthors: ["Eunmin Lee", "Jungwoo Kim"],
  authors: ["Eunmin Lee", "Jungwoo Kim", "Jong-Seok Lee"],
  venue: "Preprint",
  abstract: "Vision-language models (VLMs) are increasingly used for AI- generated image (AIGI) detection, providing natural-language explanations for authenticity judgments. However, their ability to interpret text within images may also expose these judgments to misleading semantic cues. We systematically evaluate typographic attack strategies across detection-oriented, open-weight, and com- mercial VLMs, considering both real-to-fake and fake-to-real attacks. Our results show that reasoning modes generally exhibit greater vulnerability than direct modes and that attack effectiveness exhibits pronounced directional asymmetry. Moreover, larger models tend to exhibit higher clean detection accuracy but also higher attack success rates. We further examine attack robustness under image and text transformations and investigate whether overlays indicating the correct class can aid error correction. Together, these analyses charac- terize how typographic attacks influence authenticity judgments and expose limitations of current VLM-based AIGI detection systems.",
  links: {
    arxiv: "https://arxiv.org/abs/2609.39662",
  },
};
