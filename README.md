# Gatsby Starter Site

## :rocket: Quick start

**Run the site locally**

_NOTE: The default branch for this repo is `develop`, when you push or pull make
sure you specify the correct branch_

### Step 1: Clone The Repo

Fork the repository. then clone the repo locally by doing -

```bash
git clone https://github.com/edvan-lima/gatsby-starter-site.git
```

### Step 2: Install Dependencies

cd into the directory

```bash
cd gatsby-starter-site
```

install all the dependencies

```bash
npm install
```

### Step 3: Start Development Server

Then start the development Server

```
npm run develop
```

After running the development server the site should be running on
<https://localhost:8000>

## :open_file_folder: What's inside

A quick look at the folder structure of this project.

    .
    ├── content
    │   ├───blog
    │   ├───case-studies
    │   └───json
    ├── cypress
    ├── plugins
    └── src
        ├───components
        │   ├───About
        │   ├───Blog
        │   ├───common
        │   ├───Concepts
        │   ├───Contact
        │   ├───CreativeCoding
        │   ├───Home
        │   ├───Layout
        │   │   └───Navbar
        │   ├───Lightbox
        │   ├───Projects
        │   └───Skills
        ├───hooks
        ├───pages
        ├───static
        │   └───images
        ├───styles
        └───templates

## Tools Used

1. Gatsby.js
2. Styled Components for styling
3. Cypress for E2E Testing
4. Jest for Unit Testing
5. TravisCI for CI/CD

### Running tests

```bash
npm run test
npm run test:e2e
```

### Pushing the changes

```bash
git add .
git commit -m "commit message"
git push YOUR_REPO_URL develop
```

---

Made with :heart: and Gatsbyjs
