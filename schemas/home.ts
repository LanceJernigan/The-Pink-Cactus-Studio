import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'object',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'slogan',
          title: 'Slogan',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'featurettes',
      title: 'Featurettes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                },
              ],
              validation: (rule) => rule.required(),
            }),
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
            defineField({
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (rule) =>
                    rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
                }),
                defineField({
                  name: 'text',
                  title: 'Link Text',
                  type: 'string',
                }),
                defineField({
                  name: 'newTab',
                  title: 'Open in new tab',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {select: {title: 'hero.slogan'}},
})
