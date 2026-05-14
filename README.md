# Coder Trader — Static Site

A zero-build static site where the navbar, footer, and styling apply to every page automatically.
Drop in a new HTML page, link it from the contents page, done.

## Structure

```
site/
├── index.html                     ← Contents page (list of all posts)
├── _template.html                 ← Boilerplate to copy for new posts
├── content/                       ← One HTML file per post
│   └── pre-deployment-checklist.html
├── assets/
│   ├── style.css                  ← All site styling (edit to restyle everything)
│   └── template.js                ← Injects navbar + footer on every page
└── README.md
```

## How the template system works

Every content page links to `/assets/style.css` and `/assets/template.js`. The JS file
injects the navbar at the top of `<body>` and the footer at the bottom — automatically,
on page load. You write only the content. The template appears for free.

To change the navbar or footer **across the whole site**, edit `assets/template.js`.
To change colours, fonts, or spacing **across the whole site**, edit `assets/style.css`.

## Adding a new post (3 steps)

1. **Copy `_template.html`** into `content/` with a new filename, e.g. `content/my-new-post.html`.
2. **Write your content** between the marked comment blocks. Use the HTML tags shown in
   the template (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<blockquote>`, `<pre><code>`,
   `<p class="post-lede">`). They're all pre-styled.
3. **Add a card to `index.html`** in the `.contents-grid` section. Copy an existing
   `<a class="content-card">` block, update the href, title, description, and date.

That's it. No build step, no dependencies.

## Available content tags

| Tag | Use for |
|---|---|
| `<h1>` | Post title (one per page) |
| `<h1><span class="accent">word</span></h1>` | Emerald-coloured word in the title |
| `<p class="post-lede">` | Bigger intro paragraph below the title |
| `<h2>` | Section heading (auto-prefixed with §) |
| `<h3>` | Smaller emerald subheading |
| `<p>` | Body paragraph |
| `<strong>` | Bold (use for the key noun in a bullet) |
| `<code>` | Inline code |
| `<pre><code>` | Code block |
| `<ul><li>` | Bulleted list (auto ▸ markers) |
| `<ol><li>` | Numbered list (auto 01, 02, ...) |
| `<blockquote>` | Pull quote / callout |
| `<a href="...">` | Link (auto-styled emerald) |
| `<hr>` | Section divider |
| `<div class="post-meta">` | Category / date / read-time strip |

## Deploying to GitHub Pages

1. Create a new public GitHub repo (e.g. `coder-trader-posts`).
2. Push the contents of the `site/` folder to the repo root.
3. In the repo, go to **Settings → Pages**.
4. Source: **Deploy from a branch**. Branch: **main**, folder: **/ (root)**.
5. Save. Within a minute or two your site is live at:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

### Custom domain (optional)

If you want `posts.coder-trader.com` or similar:

1. In Settings → Pages → Custom domain, enter your domain.
2. At your DNS provider, add a CNAME record pointing to `YOUR-USERNAME.github.io`.
3. Wait for DNS to propagate (usually under an hour).

## Workflow for an Instagram post

1. Write the post in a new HTML file in `content/`.
2. Add a card to `index.html`.
3. Commit and push to GitHub.
4. Copy the URL of the new post (e.g. `https://YOUR-USERNAME.github.io/coder-trader-posts/content/my-new-post.html`).
5. Use that URL in your Instagram bio link tree, or in the post caption.

## Customising the navbar

Open `assets/template.js` and edit the `NAVBAR_HTML` string. The Skool URL is defined
at the top of the file as `SKOOL_URL` — change it there once and it updates everywhere.

To add more nav links, add `<a>` tags inside `.site-nav__links`:

```html
<a href="/about.html">About</a>
```

## Local preview

Open any HTML file directly in your browser. No server needed.
For accurate behaviour (since the JS uses absolute paths starting with `/`), you can
run a one-liner local server from inside the `site/` folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.
