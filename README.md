# Dan Haggerty's Personal Website

A simple, clean personal website built with plain HTML, CSS, and JavaScript ES6 modules.

## Features

- Responsive design that works on mobile and desktop
- Dark mode toggle with persistent preference
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Work experience timeline
- Contact information and social links

## Local Development

To run the site locally, you need a simple HTTP server (required for ES6 modules to work properly):

### Python 3

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` in your browser.

### Node.js (with npx)

```bash
npx http-server -p 8000
```

Then visit `http://localhost:8000/` in your browser.

### VS Code Live Server

Install the Live Server extension, right-click on `index.html`, and select "Open with Live Server".

## File Structure

- `index.html` - Main HTML file with all content
- `styles.css` - All styles consolidated from previous CSS modules
- `main.js` - ES6 module with interactive features (dark mode, navigation, smooth scroll)
- `images/` - All static assets (images, logos, resume, favicon)

## Technologies

- Pure HTML5
- CSS3 with CSS Variables for theming
- Vanilla JavaScript ES6 Modules (no frameworks or build tools)
- Google Fonts (Red Hat Display & Red Hat Mono)

## GitHub Pages Deployment

To deploy to GitHub Pages:

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select the branch (usually `main` or `master`)
4. Select "/ (root)" as the folder
5. Click Save

Your site will be available at `https://[username].github.io/[repository-name]/`

If you want it at `https://[username].github.io/`, name your repository `[username].github.io`.

## Browser Support

- Chrome/Edge (latest) - Full support
- Firefox (latest) - Full support
- Safari (latest) - Full support
- Mobile browsers (iOS Safari, Chrome Mobile) - Full support

All modern browsers support ES6 modules natively.

## Development

The codebase uses:

- ESLint for JavaScript linting (configured for ES2021 + modules)
- Modern JavaScript (const, let, arrow functions, template literals)
- No build process required - runs directly in the browser

## License

© 2024 Dan Haggerty. All rights reserved.
