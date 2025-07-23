import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
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
      name: 'content',
      type: 'group',
      fields: [
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
      ],
    },
  ],
}
