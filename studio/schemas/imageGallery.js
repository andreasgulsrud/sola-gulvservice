export default {
  name: "imageGallery",
  title: "Image gallery",
  type: "document",
  fields: [
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
  ],
};
