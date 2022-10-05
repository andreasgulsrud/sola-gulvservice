import Image from "next/image";
import styles from "../../styles/imageGallery.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ImageGallery = ({ galleryImage }) => {
  return (
    <>
      <section className={styles.imageGalleryContainer}>
        {galleryImage && (
          <div className={styles.galleryImageWrapper}>
            <Image
              src={urlFor(galleryImage).url()}
              layout="fill"
              height="1200px"
              width="1800px"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default ImageGallery;
