import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation (optional; use Settings for simple nav)',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'href', type: 'string', title: 'Href' }
        ]
      }]
    })
  ]
})
