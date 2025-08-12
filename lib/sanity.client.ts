import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2025-07-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN || undefined,
  perspective: 'published'
})
