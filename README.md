# Shem Ogendi Kebabe — Portfolio & Online CV

Open `index.html` in any browser. No installs needed.

## 1. Replace placeholder text and images
- Open `index.html` in a text editor (VS Code / Notepad). Search for `[` — every `[placeholder]` needs your real details.
- Replace `youremail@example.com`, `+254700000000`, `your-profile`, `your-username` everywhere (also `MY_EMAIL` in `js/script.js`).
- Photo: save your picture as `assets/profile.jpg`.
- CV: save your CV as `assets/Shem_Ogendi_Kebabe_CV.pdf`.
- Project screenshots go in `assets/projects/`, certificates in `assets/certificates/` (names must match `script.js`).
- Skills bars: change `data-level="85"` (percentage).
- Colours: edit `--navy` and `--teal` at the top of `css/style.css`.
- Contact form: create a free form at formspree.io and replace `YOUR_FORM_ID` in `index.html`. Until then it opens the visitor's email app.

## 2. Add a new project or certificate
In `js/script.js`, copy one `{ ... },` block in the `projects` (or `certificates`) array, paste it below, and edit the values. The card appears automatically. Project `category` must be `web`, `data` or `academic`.

## 3. Deploy free on GitHub Pages
1. Create a GitHub account and a new public repository, e.g. `shem-portfolio`.
2. Click **Add file → Upload files**, drag in everything in this folder (keep the folders), and commit.
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/root`, Save.
4. After about a minute your site is live at `https://your-username.github.io/shem-portfolio/`.

(Netlify alternative: drag this folder onto app.netlify.com/drop.)

## Print / PDF CV
Click **Print / Save as PDF** — the page reformats into a clean, ATS-friendly CV.
