export default {
  id: "Mosaic",
  releaseDate: "2026-05-25",
  venueType: "preprint",
  venueLabel: "Preprint",
  title: "Mosaic: Compositional Multi-Concept Erasure via Vector Field Blending",
  authors: ["Junseok Ko", "Jungwoo Kim", "Jong-Seok Lee"],
  venue: "Preprint",
  abstract:
    "Concept erasure has emerged as a key research direction for ensuring safe and ethical image synthesis in text-to-image models. We introduce compositional multi-concept erasure, a task that removes multiple target concepts within a single scene, and CoME-Bench for evaluation across intra- and cross-category scenarios. Mosaic exploits the spatial locality of target concepts in the vector field by dynamically constructing concept-specific masks and selectively blending them without additional optimization. Experiments show that Mosaic removes multiple targets in complex compositional scenes while preserving non-target contexts.",
  links: {
    arxiv: "https://arxiv.org/abs/2605.25574",
    code: "https://github.com/kojunseok0217/Mosaic",
  },
};
