export default {
  id: "CtF",
  releaseDate: "2026-09-13",
  venueType: "conference",
  venueLabel: "ICIP",
  title: "Coarse-to-Fine: Progressive Image Compression for Semantically Hierarchical Classification",
  authors: ["Jungwoo Kim", "Jun-Hyuk Kim", "Jong-Seok Lee"],
  venue: "IEEE International Conference on Image Processing (ICIP)",
  abstract:
    "We introduce a semantic hierarchy-aware progressive codec that enables coarse-to-fine semantic scalability from a single bitstream. We systematically categorize ImageNet-1K classes into CLIP embedding-based semantic hierarchies and decompose latent representations into hierarchically ordered channel blocks, each optimized for its corresponding hierarchy level. The approach improves coarse-level recognition at low bitrates while maintaining fine-grained accuracy at higher bitrates.",
  links: {
    arxiv: "https://arxiv.org/abs/2605.08266",
    code: "https://github.com/kjungwoo03/Coarse-to-Fine",
  },
};
