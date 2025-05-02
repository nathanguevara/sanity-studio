import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import deskStructure from '/sanity-studio/deskStructure.js'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION!, // ✅ pulls from your .env
    useCdn: false, // set true only if using for read-only public frontend
  },
})