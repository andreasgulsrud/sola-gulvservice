import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import css from "./GalleryImage.module.css";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const GalleryImage = ({ galleryImage, caption }) => {
  return (
    <>
      {galleryImage && (
        <div className={css.galleryImageWrapper}>
          <Image
            src={urlFor(galleryImage).url()}
            width="1200"
            height="800"
            alt="insert alt text"
          />
        </div>
      )}
    </>
  );
};

export default GalleryImage;
