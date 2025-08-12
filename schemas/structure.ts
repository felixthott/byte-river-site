import { StructureResolver } from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Settings').child(S.editor().schemaType('settings').documentId('settings')),
      S.divider(),
      S.documentTypeListItem('page'),
      S.documentTypeListItem('redirect')
    ])
