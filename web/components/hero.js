import Link from "next/link";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../client";
import styled from "styled-components";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ImageContainer = styled.div`
  border: 1px solid red;
  width: 40%;
  height: 50vh;
  img {
    border: 1px solid blue;
    width: 100%;
    max-height: 100%;
  }
`;

const Hero = ({ heroImg }) => {
  return (
    <>
      {heroImg && (
        <ImageContainer>
          <img src={urlFor(heroImg).url()} />
        </ImageContainer>
      )}
    </>
  );
};

export default Hero;
