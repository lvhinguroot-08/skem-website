# S.K ENGINEERING AND MANUFACTURING (SKEM)

Official production website for **S.K Engineering and Manufacturing** — an engineering, fabrication, manufacturing, and structural steel company based in Mahesana, Gujarat, India.

## Business Details
* **Business:** S.K ENGINEERING AND MANUFACTURING
* **Brand:** SKEM
* **Positioning:** ENGINEERING | FABRICATION | MANUFACTURING | STRUCTURES
* **Contact:** Sohil Khan (+91 9510000730)
* **Email:** info.skengineeringg@gmail.com
* **Address:** 1, Ajmeri Society, Jotana Road, Mahesana, Gujarat-384001, India
* **GSTIN:** 24RFPPS1201J1Z1

## Project Structure
```
skem-website/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow for automatic GitHub Pages deployment
├── Frontend/                # Production static website root
│   ├── assets/              # Real SKEM project assets, images, and video media
│   ├── css/
│   │   └── style.css        # Responsive styling & design system
│   ├── js/
│   │   └── main.js          # Client-side routing, modals, gallery, and SEO updates
│   ├── .nojekyll            # Ensures static files are served directly by GitHub Pages
│   ├── favicon.ico          # SKEM brand icon
│   ├── index.html           # Main semantic HTML5 document with Schema.org JSON-LD
│   ├── robots.txt           # Crawler configuration pointing to sitemap
│   └── sitemap.xml          # XML sitemap with Google Image and Video extensions
├── .gitignore
└── README.md
```

## Deployment
This project is configured with GitHub Actions to automatically deploy the `Frontend/` directory directly to GitHub Pages upon push to the `main` branch.
