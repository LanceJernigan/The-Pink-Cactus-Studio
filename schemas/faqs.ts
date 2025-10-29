import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    orderRankField({type: 'faqs'}),
  ],
})
