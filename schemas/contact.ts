import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
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
    }),
  ],
  preview: {select: {title: 'hero.title', content: 'hero.content'}},
})
