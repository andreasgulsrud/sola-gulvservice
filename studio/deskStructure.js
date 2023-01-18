import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Indexpage")
        .child(S.document().schemaType("indexPage").documentId("indexPage")),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings", "indexPage"].includes(listItem.getId())
      ),
    ]);
