# Bio Link Website

A responsive personal bio-link website for **Aditya Adarsh**, built with HTML, CSS, and vanilla JavaScript. It brings professional profiles, contact information, and a resume together on one page.

## Features

- Minimal, responsive layout for desktop and mobile screens
- Dark and light theme toggle
- Saves the selected theme in the browser using `localStorage`
- Quick links to GitHub, LinkedIn, Instagram, and LeetCode
- Email contact link
- Resume link that opens the included PDF
- CSS hover effects and custom typography using Google Fonts

## Tech Stack

- **HTML5** — page structure and content
- **CSS3** — styling, layout, responsive design, and transitions
- **JavaScript** — theme switching and theme preference persistence
- **Browser localStorage** — remembers the selected theme

## Project Structure

```text
Bio Link Website/
├── index.html                  # Main webpage
├── styles.css                  # Styling and responsive layout
├── script.js                   # Theme toggle behavior
├── Aditya-Adarsh-Resume.pdf    # Resume linked from the webpage
├── README.md                   # Project documentation
└── .gitignore                  # Files Git should ignore
```

## Run Locally

No build tools, backend, or database are required.

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code or another editor.
3. Open `index.html` directly in a browser, or use the VS Code **Live Server** extension.
4. Click the theme toggle and test the profile and contact links.

## Customize

- Edit the name, introduction, email address, and profile URLs in `index.html`.
- Update colors, typography, layout, and responsive rules in `styles.css`.
- Modify theme-toggle behavior in `script.js`.
- Replace `Aditya-Adarsh-Resume.pdf` with an updated resume while keeping the filename the same, or update its link in `index.html`.

## Deploy

This is a static website and can be hosted using GitHub Pages, Netlify, or Vercel. For GitHub Pages, open the repository's **Settings → Pages**, select the deployment source/branch, and save.

## License

No license has been specified. Add a license file if you want to define permissions for reuse and distribution.
