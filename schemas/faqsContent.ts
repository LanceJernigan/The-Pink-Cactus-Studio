import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'content.faqs',
  title: 'FAQs',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
