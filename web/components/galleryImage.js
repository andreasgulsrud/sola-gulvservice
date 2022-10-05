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
  max-width: 100%;
  height: auto;
  img {
    width: 100%;
    /* height: auto; */
  }
`;

const GalleryImage = ({ galleryImage, caption }) => {
  return (
    <>
      {galleryImage && (
        <GalleryImageWrapper>
          <Image
            src={urlFor(galleryImage).url()}
            width="1200"
            height="800"
            layout="intrinsic"
            objectFit="cover"
          />
        </GalleryImageWrapper>
      )}
    </>
  );
};

export default GalleryImage;
