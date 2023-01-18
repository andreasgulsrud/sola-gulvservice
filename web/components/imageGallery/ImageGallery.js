import classNames from "classnames";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ children }) => {
  return (
    <>
      <section className={classNames(css.imageGalleryContainer)}>
        {children}
      </section>
    </>
  );
};

export default ImageGallery;
