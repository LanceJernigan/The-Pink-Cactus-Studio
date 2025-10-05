import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'social',
      title: 'Social',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({scheme: ['http', 'https'], allowRelative: false}),
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({scheme: ['http', 'https'], allowRelative: false}),
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (rule) =>
            rule.required().regex(/^\+?[0-9\s\-()]{7,}$/, {name: 'valid phone number'}),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (rule) => rule.required().email(),
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'mapLink',
          title: 'Map Link',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({scheme: ['http', 'https'], allowRelative: false}),
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
