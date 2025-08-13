import { createClient } from '@sanity/client'

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error('Missing Sanity env: projectId/dataset')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-07-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN || undefined,
  perspective: 'published',
})
