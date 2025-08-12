import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }]
    }),
    defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }], title: 'Bio' }),
    defineField({ name: 'twitter', type: 'string', title: 'Twitter (optional)' }),
    defineField({ name: 'linkedin', type: 'string', title: 'LinkedIn (optional)' }),
  ]
})
