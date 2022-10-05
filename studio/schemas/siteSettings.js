export default {
  name: "siteSettings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "metaTitle",
      description: "tittel for deling av lenker.",
      title: "SEO: Meta tittel",
      type: "string",
    },
    {
      name: "metaDescription",
      description: "Kort metabeskrivelse for deling av lenker.",
      title: "SEO: Meta beskrivelse",
      type: "text",
    },
    {
      name: "metaImage",
      description: "Bilde for deling av lenker.",
      title: "SEO: Bilde",
      type: "image",
    },
  ],
};
