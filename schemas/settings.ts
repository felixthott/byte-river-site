import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    defineField({ name: 'siteTitle', type: 'string', title: 'Site Title' }),
    defineField({ name: 'siteDescription', type: 'text', title: 'Site Description' }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'href', type: 'string', title: 'Href' }
          ]
        }
      ]
    })
  ]
})
