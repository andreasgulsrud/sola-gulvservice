export default {
  name: "indexPage",
  title: "Indexpage",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "imageGalleryHeading",
      title: "Image Gallery Heading",
      type: "string",
    },
    {
      name: "galleryImages",
      title: "Gallery images",
      type: "array",
      of: [
        {
          title: "Poster",
          name: "poster",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
      ],
    },
    {
      name: "footerHeading",
      title: "Footer heading",
      description: "Overskrift i footer. F.eks.: Avtal en befaring",
      type: "string",
    },
    {
      name: "footerName",
      title: "Footer name",
      description: "Navn på kontaktperson",
      type: "string",
    },
    {
      name: "footerPhone",
      title: "Footer phone",
      description: "Telefonnummer til kontaktperson",
      type: "string",
    },
    {
      name: "footerMail",
      title: "Footer mail",
      description: "Mail til kontaktperson",
      type: "string",
    },
  ],
};
