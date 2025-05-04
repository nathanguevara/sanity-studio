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
git clone https://github.com/nathanguevara/sanity-studio-schema-starter.git
cd sanity-studio-schema-starter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your local environment

1. Copy `.env.example` to create your local `.env` file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your Sanity project details:
```env
SANITY_STUDIO_PROJECT_ID=<your_project_id>
SANITY_STUDIO_DATASET=<production>
SANITY_STUDIO_API_VERSION=<2023-12-14>
```

You can find your project ID in your [Sanity project settings](https://www.sanity.io/manage).

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
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  useCdn: true,
})
```

3. Query content in your frontend:

```js
const posts = await sanity.fetch(`*[_type == "post"]{title, slug}`)
```

4. (Optional) Use `@portabletext/react` to render rich content.

## 🔐 Deployment

This Studio is configured for deployment on Netlify. Follow these steps to deploy:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set up the following environment variables in Netlify's dashboard (Site settings > Build & deploy > Environment):
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
   - `SANITY_STUDIO_API_VERSION`

The `netlify.toml` file is already configured with the correct build settings. No additional configuration is needed.

## 🤝 Contributions

PRs welcome! This repo is public to help other developers learn how to structure and deploy a multi-use Sanity Studio. If you use it or adapt it, feel free to fork, star, or contribute!

---

### 📣 Credits

Created and maintained by [Nathan Guevara](https://github.com/nathanguevara)
