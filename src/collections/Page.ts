import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'newTitle',
  },
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    }, 
    {
      name: 'values',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'parent',
      label: 'Parent',
      type: 'relationship',
      relationTo: 'page',
      localized: true,
    },
    {
      name: 'newTitle',
      label: 'New Title',
      type: 'text',
      localized: true,
      hooks: {
        beforeChange: [
          async ({ siblingData }) => {
            return `${siblingData?.title} - ${siblingData.slug}`
          },
        ],
        afterRead: [
          async ({ siblingData }) => {
            return `${siblingData.title} - ${siblingData.slug}`
          },
        ],
      },
    },
  ],
}
