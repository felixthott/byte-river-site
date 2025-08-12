import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import { deskStructure } from './schemas/structure'

export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  title: 'Byte River CMS',
  basePath: '/studio',
  plugins: [structureTool({ structure: deskStructure }), visionTool()],
  schema: { types: schemaTypes }
})
