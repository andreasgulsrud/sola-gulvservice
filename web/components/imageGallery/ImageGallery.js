import classNames from "classnames";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ children, imageGalleryHeading }) => {
  return (
    <>
      <h5 className={css.imageGalleryHeading}>{imageGalleryHeading}</h5>
      <section className={classNames(css.imageGalleryContainer)}>
        {children}
      </section>
    </>
  );
};

export default ImageGallery;
