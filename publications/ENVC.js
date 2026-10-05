export default {
  id: "ENVC",
  releaseDate: "2026-09-27",
  venueType: "preprint",
  venueLabel: "Preprint",
  title: "Event-guided Neural Video Compression",
  coFirstAuthors: ["Jiyun Kong", "Jungwoo Kim"],
  authors: ["Jiyun Kong", "Jungwoo Kim", "Enes Eray Demirtas", "Touradj Ebrahimi", "Jong-Seok Lee"],
  venue: "Preprint",
  abstract: "Neural video codecs derive motion and temporal contexts mainly from RGB frames, leaving room for cross-modal guidance from complementary temporal observations. Event streams can provide such observations by recording bright- ness changes between frames. In this work, we propose an Event-guided Neural Video Codec (ENVC) that uses events shared by the encoder and decoder to improve RGB compression efficiency. For motion coding, ENVC forms an event- guided motion prior and codes the remaining motion residual. For frame cod- ing, an event-conditioned predictor supplies multi-scale features for gated temporal context refinement. To support training and evaluation on standard video datasets, we synthesize paired RGB–event data and assess its predictive utility through comparisons with real events. Across six benchmarks, ENVC achieves average BD-rate savings of 39.13% using PSNR-RGB and 67.63% using LPIPS relative to DCMVC. Further analyses show that our gains persist on large-motion sequences and that ENVC effectively learns to integrate event information. These results demonstrate the potential of events as a complementary modality for reducing the RGB coding rate.",
  links: {
    arxiv: "http://arxiv.org/abs/2610.02265",
    code: "https://github.com/kjungwoo03/ENVC"
  },
};
