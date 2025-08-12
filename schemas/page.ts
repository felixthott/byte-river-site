import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 }
    }),
    defineField({ name: 'isHome', type: 'boolean', title: 'Make this the home page' }),
    defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }]
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Meta Title' },
        { name: 'description', type: 'text', title: 'Meta Description' },
        { name: 'canonical', type: 'string', title: 'Canonical Path (e.g., /about)' }
      ]
    })
  ]
})
