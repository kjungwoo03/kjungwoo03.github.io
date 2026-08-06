# kjungwoo03.github.io

Personal academic homepage for Jungwoo Kim, inspired by the [al-folio](https://github.com/alshedivat/al-folio) information architecture and visual language.

The site intentionally remains dependency-free and deploys directly from static HTML, CSS, and JavaScript on GitHub Pages.

## Local preview

```bash
python3 -m http.server 4000
```

Then open `http://localhost:4000`.

## Managing publications

Each paper is stored as one JavaScript data file in `publications/`. The
`releaseDate` field uses the ISO `YYYY-MM-DD` format and controls the order on
the homepage. Use the venue date for an accepted paper and the first preprint
release date otherwise.

When adding a paper:

1. Copy an existing file in `publications/` and update its fields.
2. Import the new file in `publications/index.js` and add it to the exported
   array.

The page automatically sorts papers by `releaseDate` from newest to oldest and
renders links in the order ABS, arXiv, DOI, Code, Dataset. VESPA, FP-NAC, and
SAE-CP currently contain provisional dates marked with TODO comments. Set a
paper's `releaseDate` to an empty string (`""`) to hide it from the homepage.
