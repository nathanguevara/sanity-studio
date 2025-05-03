# Sanity Studio Schema Starter

This is a [Sanity Studio](https://www.sanity.io/) project bootstrapped with `create-sanity`.

## What's inside?

This Sanity Studio template includes:

- A fully configured Sanity Studio
- A collection of useful schemas for common website components
- A custom desk structure for better content organization
- TypeScript support
- ESLint and Prettier configuration

## Getting started

```bash
# Clone the repository
git clone https://github.com/nathanguevara/sanity-studio-schema-starter.git
cd sanity-studio-schema-starter

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔧 Tech Stack

- [Sanity Studio v3](https://www.sanity.io/)
- GROQ (Sanity query language)
- Custom schemas for blog posts, projects, pages, sections, and site settings
- Hosted on [Netlify](https://netlify.com)

## 🗂 Folder Structure

```
sanity-studio/
├── schemas/              # Document schemas (post, project, page, etc.)
├── schemas/objects/      # Reusable modular content types
├── deskStructure.js      # Custom Studio structure
├── sanity.config.ts      # Studio config
├── .env.example          # Local environment setup template
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nathanguevara/sanity-studio.git
cd sanity-studio/sanity-studio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your local environment

Copy `.env.example` and fill in your actual project ID and dataset.

```bash
cp .env.example .env
```

```
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2023-12-14
```

### 4. Run locally

```bash
npm run dev
```

Studio will open at [http://localhost:3333](http://localhost:3333)

## 🌐 Connecting to a Frontend

To use the content from this Studio in a frontend (like Next.js or Astro):

1. Install the Sanity client:

```bash
npm install @sanity/client groq
```

2. Set up a client (`lib/sanity.js`):

```js
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  apiVersion: '2023-12-14',
  useCdn: true,
})
```

3. Query content in your frontend:

```js
const posts = await sanity.fetch(`*[_type == "post"]{title, slug}`)
```

4. (Optional) Use `@portabletext/react` to render rich content.

---

## 🔐 Deployment

This Studio is deployed to Netlify using the included `netlify.toml` configuration. It uses environment variables set in the Netlify UI — no secrets are committed to this repo.

## 🤝 Contributions

PRs welcome! This repo is public to help other developers learn how to structure and deploy a multi-use Sanity Studio. If you use it or adapt it, feel free to fork, star, or contribute!

---

### 📣 Credits

Created and maintained by [Nathan Guevara](https://github.com/nathanguevara)
