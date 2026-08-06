import publications from "./publications/index.js";

const PUBLICATION_LINKS = [
  ["arxiv", "arXiv"],
  ["doi", "DOI"],
  ["code", "Code"],
  ["dataset", "Dataset"],
];

const NEWS_PREVIEW_COUNT = 6;

function appendAuthors(container, authors) {
  authors.forEach((author, index) => {
    if (index > 0) container.append(", ");

    if (author === "Jungwoo Kim") {
      const self = document.createElement("span");
      self.className = "author-self";
      self.textContent = author;
      container.append(self);
      return;
    }

    container.append(author);
  });
}

function createPublicationItem(publication) {
  const article = document.createElement("article");
  article.className = "publication-item";
  article.dataset.publicationId = publication.id;

  const badge = document.createElement("div");
  badge.className = `venue-badge ${publication.venueType}`;
  badge.textContent = publication.venueLabel;

  const copy = document.createElement("div");
  copy.className = "publication-copy";

  const heading = document.createElement("h4");
  const titleUrl = publication.links.arxiv || publication.links.doi;
  if (titleUrl) {
    const titleLink = document.createElement("a");
    titleLink.href = titleUrl;
    titleLink.textContent = publication.title;
    heading.append(titleLink);
  } else {
    heading.textContent = publication.title;
  }

  const authors = document.createElement("p");
  authors.className = "authors";
  appendAuthors(authors, publication.authors);

  const venue = document.createElement("p");
  venue.className = "venue";
  venue.textContent = `${publication.venue}, ${publication.releaseDate.slice(0, 4)}`;

  const actions = document.createElement("div");
  actions.className = "publication-actions";

  if (publication.abstract) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const abstract = document.createElement("p");
    summary.textContent = "ABS";
    abstract.textContent = publication.abstract;
    details.append(summary, abstract);
    actions.append(details);
  }

  PUBLICATION_LINKS.forEach(([key, label]) => {
    const url = publication.links[key];
    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    link.textContent = label;
    actions.append(link);
  });

  copy.append(heading, authors, venue, actions);
  article.append(badge, copy);
  return article;
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  if (!list) return;

  const sorted = publications
    .filter(
      (publication) =>
        typeof publication.releaseDate === "string" && publication.releaseDate.trim()
    )
    .map((publication, sourceIndex) => ({ ...publication, sourceIndex }))
    .sort(
      (a, b) =>
        b.releaseDate.localeCompare(a.releaseDate) || a.sourceIndex - b.sourceIndex
    );

  const fragment = document.createDocumentFragment();
  let activeYear = null;
  let yearGroup = null;

  sorted.forEach((publication) => {
    const year = publication.releaseDate.slice(0, 4);
    if (year !== activeYear) {
      activeYear = year;
      yearGroup = document.createElement("div");
      yearGroup.className = "publication-year";

      const yearHeading = document.createElement("h3");
      yearHeading.textContent = year;
      yearGroup.append(yearHeading);
      fragment.append(yearGroup);
    }

    yearGroup.append(createPublicationItem(publication));
  });

  list.replaceChildren(fragment);
}

(() => {
  renderPublications();

  const menuToggle = document.querySelector(".menu-toggle");
  const siteMenu = document.querySelector(".site-menu");
  const newsToggle = document.querySelector(".news-toggle");
  const newsItems = [...document.querySelectorAll(".news-item")];
  const extraNews = newsItems.slice(NEWS_PREVIEW_COUNT);

  newsItems.forEach((item, index) => {
    const isExtra = index >= NEWS_PREVIEW_COUNT;
    item.classList.toggle("is-extra", isExtra);
    item.hidden = isExtra;
  });

  newsToggle.hidden = extraNews.length === 0;

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    siteMenu.classList.toggle("is-open", open);
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.innerWidth <= 800) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteMenu.classList.remove("is-open");
    }
  });

  newsToggle.addEventListener("click", () => {
    const expanded = newsToggle.getAttribute("aria-expanded") === "true";
    extraNews.forEach((item) => {
      item.hidden = expanded;
    });
    newsToggle.setAttribute("aria-expanded", String(!expanded));
    newsToggle.textContent = expanded ? "show more news" : "show less news";
  });

  const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const sectionLinks = new Map(
    navLinks.map((link) => [document.querySelector(link.getAttribute("href")), link])
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        navLinks.forEach((link) => link.classList.remove("is-active"));
        sectionLinks.get(visible.target)?.classList.add("is-active");
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] }
    );

    sectionLinks.forEach((_, section) => {
      if (section) observer.observe(section);
    });
  }
})();
