import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'redirect',
  type: 'document',
  title: 'Redirect',
  fields: [
    defineField({ name: 'from', type: 'string', title: 'From path (e.g., /old)' }),
    defineField({ name: 'to', type: 'string', title: 'To URL or path (e.g., /new)' }),
    defineField({ name: 'permanent', type: 'boolean', title: 'Permanent (301)', initialValue: true })
  ]
})
