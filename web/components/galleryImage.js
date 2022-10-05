import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import styled from "styled-components";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const GalleryImageWrapper = styled.div`
  border: 2px solid green;
  width: 500px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const GalleryImage = ({ galleryImage, caption }) => {
  return (
    <>
      {galleryImage && (
        <GalleryImageWrapper>
          <img src={urlFor(galleryImage).url()} />
        </GalleryImageWrapper>
      )}
    </>
  );
};

export default GalleryImage;
