import type {StructureResolver} from 'sanity/structure'

export const menuStructure: StructureResolver = (S) =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Items')
        .schemaType('menuItems')
        .child(S.documentTypeList('menuItems').title('Items')),
      S.listItem()
        .title('Categories')
        .schemaType('menuItemCategory')
        .child(S.documentTypeList('menuItemCategory').title('Categories')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['menuItemCategory', 'menuItems'].includes(listItem.getId() || ''),
      ),
    ])
