import type {StructureResolver} from 'sanity/structure'

export const menuStructure: StructureResolver = (S) =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Categories')
        .schemaType('menuItemCategory')
        .child(S.documentTypeList('menuItemCategory').title('Categories')),
      S.listItem()
        .title('Items')
        .schemaType('menuItems')
        .child(S.documentTypeList('menuItems').title('Items')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['menuItemCategory', 'menuItems'].includes(listItem.getId() || ''),
      ),
    ])
