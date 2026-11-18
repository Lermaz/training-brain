# 🧠 training-brain

A single repository to keep **everything I build while studying new technologies**.

Instead of scattering small practice projects across many repositories, each experiment, tutorial, or proof of concept lives here as its own self-contained folder. One place to search, one place to back up, one place to look back on what I've learned.

---

## Why this repo exists

- **One home for all study projects.** No more hunting through GitHub for "that repo where I tried X".
- **Easy to review and compare.** Seeing different technologies side by side makes it easier to revisit patterns and ideas.
- **Low friction to start something new.** Create a folder, write a short README, start learning.
- **A visible learning log.** The commit history and project index show how my skills evolve over time.

---

## Repository structure

Every project is an independent folder at the root of the repository, with its own dependencies, config, and README.

```
training-brain/
├── README.md
├── playwright-testing-sample/
│   └── ...
├── <next-project>/
│   └── ...
└── ...
```

> Projects don't share dependencies or tooling. Each folder should run on its own after following its own README.

---

## Projects index

| Project | Technology | Topic | Status |
| --- | --- | --- | --- |
| [`playwright-testing-sample`](./playwright-testing-sample) | Playwright | End-to-end testing sample | 🟢 Done |

**Status legend:** 🟢 Done · 🟡 In progress · 🔵 Idea / not started · ⚪ Archived

---

## Conventions

To keep the repo tidy as it grows:

1. **Folder naming:** `kebab-case`, descriptive, ideally `<technology>-<topic>` (e.g. `playwright-testing-sample`).
2. **One README per project** that answers:
   - What am I learning here?
   - How do I install and run it?
   - What did I learn / what's left to explore?
3. **Self-contained projects:** each has its own `package.json`, `requirements.txt`, `go.mod`, etc. No cross-project imports.
4. **No secrets in the repo.** Use `.env` files (gitignored) and provide a `.env.example` when needed.
5. **Update the index** in this README whenever a project is added, finished, or archived.

---

## Adding a new project

```bash
# 1. Create the project folder
mkdir my-new-study-project
cd my-new-study-project

# 2. Initialize it with its own tooling (example: Node)
npm init -y

# 3. Add a README using the template below
touch README.md
```

Then add a row to the [Projects index](#projects-index) and commit:

```bash
git add .
git commit -m "feat: add my-new-study-project"
```

### Project README template

```md
# project-name

## 🎯 Goal
What technology or concept am I studying?

## 🛠️ Stack
- Tech 1
- Tech 2

## 🚀 Getting started
Install and run instructions.

## 📝 Notes & learnings
Key takeaways, gotchas, links to docs/tutorials.

## ✅ Next steps
What I want to explore next.
```

---

## Getting started with this repo

```bash
git clone <your-repo-url> training-brain
cd training-brain

# Pick a project and follow its README
cd playwright-testing-sample
```

---

## Roadmap / ideas

Technologies and topics I'd like to explore next (edit freely):

- [ ] _Add your next study topic here_

---

## License

For personal learning purposes. Feel free to browse and borrow ideas.