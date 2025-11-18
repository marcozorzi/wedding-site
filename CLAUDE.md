# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static wedding website built with vanilla HTML and CSS, designed to be hosted on Netlify. The site uses a single-page layout with multiple sections covering wedding details, story, schedule, travel information, and RSVP.

**GitHub Repository**: `git@github.com:marcozorzi/wedding-site.git`

## Architecture

### Static Site Structure
- **[index.html](index.html)**: Single-page HTML file containing all content sections
  - Hero section with names, date, and location
  - Details, story, schedule, travel, and RSVP sections
  - Embedded Google Form for RSVP collection
- **[style.css](style.css)**: All styling using modern CSS
  - Mobile-first responsive design using `clamp()` and CSS custom properties
  - Hero section with background image overlay (`hero.jpg` - currently missing)

### Deployment
- Hosted on Netlify (static site hosting)
- No build process required - site deploys directly from the repository
- Git-based deployment: push to `main` branch triggers automatic deployment

## Key Customization Points

When personalizing this site, focus on these areas:
1. **Names and date** in [index.html:13-15](index.html#L13-L15)
2. **Google Form RSVP URL** at [index.html:52](index.html#L52)
3. **Hero background image**: Add `hero.jpg` to the root directory
4. **Wedding details**: Update ceremony time, venue, and address in the details section
5. **Story and travel information**: Replace placeholder text with actual content

## Assets Required

- `hero.jpg`: Background image for the hero section (referenced in [style.css:17](style.css#L17))
- Optional: favicon and additional images for the story/travel sections
