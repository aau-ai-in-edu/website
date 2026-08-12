# AI in Education — Website

Static website for the [AI in Education](https://aau-ai-in-edu.github.io/website) project at AAU Energy.
Built with [Jekyll](https://jekyllrb.com/) and deployed via GitHub Pages.

---

## Prerequisites

| Requirement | Minimum version | Notes |
|---|---|---|
| Ruby | 3.1+ | Check with `ruby -v` |
| RubyGems | bundled with Ruby | Check with `gem -v` |
| Bundler | 2.0+ | Install with `gem install bundler` |
| Git | any recent | For cloning the repo |

### Installing Ruby

<details>
<summary>macOS</summary>

The system Ruby on macOS is outdated. Use [rbenv](https://github.com/rbenv/rbenv) or [Homebrew](https://brew.sh/):

```bash
# Homebrew
brew install ruby

# or rbenv (recommended for managing multiple versions)
brew install rbenv
rbenv install 3.3.0
rbenv global 3.3.0
```

After installing, restart your terminal and verify:

```bash
ruby -v   # should show 3.x.x
gem -v
```
</details>

<details>
<summary>Ubuntu / Debian</summary>

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
```

Add gem install path to your shell profile (`~/.bashrc` or `~/.zshrc`):

```bash
echo '# Ruby gems'                             >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"'            >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"'      >> ~/.bashrc
source ~/.bashrc
```

Then install Bundler:

```bash
gem install bundler
```
</details>

<details>
<summary>Windows</summary>

Use [RubyInstaller](https://rubyinstaller.org/). Download the **Ruby+Devkit** installer (3.1 or newer), run it, and follow the prompts. When asked, also run `ridk install` to set up the build toolchain.

Then open a new terminal and install Bundler:

```bash
gem install bundler
```
</details>

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/aau-ai-in-edu/website.git
cd website
```

### 2. Install dependencies

```bash
bundle install
```

This reads `Gemfile` and installs Jekyll, `github-pages`, and all required plugins into the local bundle.

### 3. Serve the site locally

```bash
bundle exec jekyll serve
```

Open your browser at **http://localhost:4000/website/**

> The `/website` path comes from `baseurl: "/website"` in `_config.yml`, which matches the GitHub Pages deployment path. To serve at the root instead, run:
> ```bash
> bundle exec jekyll serve --baseurl ""
> ```
> and open **http://localhost:4000/**.

### Useful flags

| Flag | Effect |
|---|---|
| `--livereload` | Auto-refreshes the browser on file changes |
| `--drafts` | Includes posts in `_drafts/` |
| `--baseurl ""` | Serves at root (`localhost:4000/`) instead of `/website/` |
| `--port 5000` | Changes the port |

Example with live reload:

```bash
bundle exec jekyll serve --livereload --baseurl ""
```

---

## Project structure

```
website/
├── _config.yml          # Site settings, navigation, hero copy, stats
├── _layouts/
│   ├── default.html     # Base layout (header, footer, nav)
│   └── app.html        # Individual app page layout
├── _apps/              # One .md file per app (Jekyll collection)
│   ├── ai-quizzer.md
│   ├── ai-report-commenter.md
│   └── ai-practical-workshop.md
├── assets/
│   ├── css/
│   │   └── style.css    # All site styles
│   └── js/
│       └── main.js      # Modal / interactive behaviour
├── index.html           # Home page (hero + apps grid + about + CTA)
├── 404.html             # Custom 404 page
└── Gemfile              # Ruby dependencies
```

---

## Adding a new app

1. Create a new file in `_apps/`, e.g. `_apps/my-new-app.md`.
2. Add the front matter:

```yaml
---
layout: default
title: My New App
icon: "🔧"
tagline: One-line description of what the app does
github_path: project-my-new-app
link: https://example.com/my-app
live: false
accent: "#e74b65"
order: 4
features:
  - Feature one
  - Feature two
  - Feature three
---
```

| Field | Description |
|---|---|
| `title` | Displayed as the card heading |
| `icon` | Emoji shown at the top of the card |
| `tagline` | Short subtitle under the title |
| `github_path` | Folder name in the repo root (used for GitHub links) |
| `link` | URL the "Open app →" button points to |
| `live` | `true` shows a green **Live** badge; `false` shows a grey **Not live** badge |
| `accent` | Hex colour used for the card's top border and feature list ticks |
| `order` | Controls the display order in the apps grid (lower = first) |
| `features` | Bullet list of highlights shown on the card |
| `more_info` | Longer text shown in the "More info" pop-up modal |

3. Restart `jekyll serve` (or let live reload pick it up) — the card appears automatically on the home page.

---

## Deployment

The site is deployed automatically to GitHub Pages when changes are pushed to the `main` branch. No manual build step is required; GitHub Pages runs Jekyll on the server side.

Live URL: **https://aau-ai-in-edu.github.io/website**
