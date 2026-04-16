![Proof HTML](https://github.com/GRAAL-Lab/demo-repository/actions/workflows/proof-html.yml/badge.svg)

# GRAAL Lab. – Repositories Website

This repository contains a minimal static webpage used as a landing hub for the GRAAL Laboratory GitHub organization.

Link: https://graal-lab.github.io/.github/.

## Structure

* `index.html` → main entry point (layout, content, links)
* `css/styles.css` → external styles
* `js/script.js` → dynamic objects

## Design

The website uses:

* simple HTML + CSS + JS (no frameworks)
* bunny-fonts (Roboto Slab, Fira Sans)

## Editing

To add new repositories:

1. Duplicate an existing `<article class="card">` block in `index.html`
2. Update:

   * title
   * description
   * link
   * tags

To modify styling:

* edit the CSS in `css/styles.css`

## Deployment

Works out-of-the-box with **GitHub Pages**.

