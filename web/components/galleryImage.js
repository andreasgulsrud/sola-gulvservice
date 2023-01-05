import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import styled from "styled-components";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const GalleryImageWrapper = styled.div`
  display: flex;
  filter: grayscale(80%);
  transition: 0.5s;
  &:hover {
    filter: none;
  }
  img {
    width: 100%;
    height: 100%;
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
