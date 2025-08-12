import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 }
    }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }]
    }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published at' }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }], title: 'Author' }),
    defineField({ name: 'categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }], title: 'Categories' }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }, { name: 'caption', type: 'string', title: 'Caption' }]
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'body', type: 'text', title: 'Body' }
          ]
        },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Block',
          fields: [
            { name: 'language', type: 'string', title: 'Language' },
            { name: 'code', type: 'text', title: 'Code' }
          ]
        }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Meta Title' },
        { name: 'description', type: 'text', title: 'Meta Description' },
        { name: 'canonical', type: 'string', title: 'Canonical Path (e.g., /blog/my-post)' }
      ]
    })
  ]
})
