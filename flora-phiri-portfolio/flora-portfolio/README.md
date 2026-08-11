# Flora Phiri | Portfolio

A static portfolio site built with plain HTML, CSS, and JavaScript, ready for
GitHub Pages. Dark navy is the primary theme with a light mode toggle. The
visual design is adapted from the Frontend Mentor social links challenge.

## Structure

```
index.html              Home page: hero card, filtered project slideshow, contact
documents.html          Documents page: academic files and papers
css/
  main.css              Theme tokens, layout, and shared components
  project.css           Styles specific to project detail pages
js/
  theme.js              Light/dark toggle with localStorage persistence
  projects.js           Project data, slideshow rendering, category filtering
projects/
  credit-risk-classification.html
  diabetes-prediction.html
  housing-price-prediction.html
  linear-regression-from-scratch.html
  data-preprocessing-toolkit.html
  classical-ml-survey.html
  big-data-databricks.html
  sms-spam-classification.html
  sql-analysis.html
  smart-dmv-digital-verification.html
  social-links-profile.html
assets/images/
  avatar-flora.svg      Initials placeholder avatar
  favicon.svg
assets/docs/
  flora-phiri-resume.pdf
  flora-phiri-transcript.pdf
  flora-phiri-msc-dissertation.pdf
  smart-dmv-digital-verification.pdf
```

## Before publishing

The following placeholders need real values. Search the codebase for each
string and replace it.

1. `flora.phiri@example.com` in index.html, replace with Flora's real email.
2. `https://www.linkedin.com/in/flora-phiri` in index.html, replace with her
   real LinkedIn URL.
3. `https://github.com/floraphiri` in index.html, replace with her real
   GitHub profile URL.
4. `assets/images/avatar-flora.svg` is an initials placeholder. Swap in a
   real photo and update the `src` and `alt` on the hero image in index.html.
5. Every `repoUrl` in `js/projects.js` (and the matching "See the code on
   GitHub" link on each project page) is a placeholder. Replace each of
   these with Flora's real repository URLs:
   - `https://github.com/floraphiri/credit-risk-classification`
   - `https://github.com/floraphiri/diabetes-prediction`
   - `https://github.com/floraphiri/housing-price-prediction`
   - `https://github.com/floraphiri/linear-regression-from-scratch`
   - `https://github.com/floraphiri/data-preprocessing-toolkit`
   - `https://github.com/floraphiri/classical-ml-survey`
   - `https://github.com/floraphiri/databricks-notebooks`
   - `https://github.com/floraphiri/sms-spam-classification`
   - `https://github.com/floraphiri/sql-analysis`
   - `https://github.com/floraphiri/social-links-profile`

   The Smart-DMV project has no repository; its `repoUrl` points at the
   capstone deck in `assets/docs/` instead.

## Adding a project

Add one object to `portfolioProjects` in `js/projects.js` (the `slug` must
match the filename) and create `projects/<slug>.html` by copying an existing
project page. Each object needs a `repoUrl` (the project's repository link,
used by the slideshow's "Repository" link) and a `snippet` object with a
`filename` shown in the snippet frame header and the `code` string displayed
on the slide. No other changes are needed. If the project introduces a new
category, add it to `projectCategories` in the same file.

## Deploying to GitHub Pages

Push this folder to a repository, then enable Pages from the repository
settings, serving from the main branch root. All paths are relative, so the
site works both at `username.github.io` and at
`username.github.io/repo-name/`.
