# GRAAL Lab. – Repositories Website

This repository contains a minimal static webpage used as a landing hub for the GRAAL Lab. GitHub organization.

## Structure

* `index.html` → main entry point (layout, content, links)
* `css/styles.css` *(optional)* → external styles

The page is fully static (no build tools, no dependencies) and can be directly hosted via GitHub Pages.

## Design

The website uses:

* modern, minimal layout
* white / blue / cyan color palette inspired by marine robotics
* responsive grid for repository cards
* simple HTML + CSS (no frameworks)

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

Works out-of-the-box with **GitHub Pages**:

