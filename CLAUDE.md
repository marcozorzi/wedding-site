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

## Key Information

### Wedding Details
- **Date**: May 22, 2026 at 11:00 AM
- **Venue**: Ristorante Le Querce, Via Talponera, 130/A, 31050 Ponzano Veneto (TV)
- **Ceremony & Reception**: Same location
- **Honeymoon**: Spain

### Google Forms
- **RSVP Form**: https://docs.google.com/forms/d/e/1FAIpQLSfZByRBsQ6yzi6_EvG2ZjBkblDsKeRd-pr7w8OjAzyKnRk9mQ/viewform?embedded=true

### Password Protection
- Password managed in [auth.js:4](auth.js#L4)
- Current password: `22maggio2026`

### IBAN for Honeymoon Contributions
- Update IBAN code in [index.html:233](index.html#L233)
- Currently placeholder: `IT00 X000 0000 0000 0000 0000 000`

## Key Customization Points

When personalizing this site, focus on these areas:
1. **Couple photos**: Add `bride.jpg` and `groom.jpg` to `resources/` folder
2. **Spain honeymoon photos**: Add `spain1.jpg`, `spain2.jpg`, `spain3.jpg` to `resources/` folder
3. **IBAN**: Replace placeholder IBAN in honeymoon section
4. **Couple bios**: Update descriptions in the couple section
5. **Travel information**: Add details about airports, hotels, etc.

## Assets Required

- `resources/hero.jpg`: Hero section background (✓ added)
- `resources/logo.png`: Navigation logo (✓ added)
- `resources/bride.jpg`: Antonia's photo (optional)
- `resources/groom.jpg`: Marco's photo (optional)
- `resources/spain1.jpg`, `spain2.jpg`, `spain3.jpg`: Honeymoon photos (optional)

## Recent Changes Summary

### Design & Colors
- Color scheme: Green (#a2b49b) and Pink (#e2c6c3)
- Elegant typography: Cormorant Garamond (serif) + Montserrat (sans-serif)
- Password-protected with bilingual support (Italian default, English secondary)

### Sections
1. **Home/Hero**: Countdown timer to wedding date
2. **Coppia (Couple)**: Profile cards for Antonia & Marco
3. **Quando & Dove (When & Where)**: Venue details, schedule, travel info
4. **RSVP**: Google Form embedded
5. **Viaggio di Nozze (Honeymoon)**: Spain trip with photo gallery and IBAN for contributions

### Technical Notes
- All images organized in `resources/` folder
- Smooth scroll navigation with language toggle (IT/EN)
- Copy IBAN functionality with visual feedback
- Mobile-responsive design
- No build process - static HTML/CSS/JS deployed directly to Netlify

## Colors
Primary Color (Green - #a2b49b)
Secondary Color (Pink - #e2c6c3) 
Dark Gray (#2c2c2c)
White 