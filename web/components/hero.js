import Link from "next/link";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../client";
import styled from "styled-components";
import FadeInSection from "./fadeInSection/FadeInSection";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const HeroWrapper = styled.section`
  /* border: 1px solid green; */
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  /* border: 1px solid red; */
  max-width: 60%;
  height: auto;
  filter: grayscale(75%);
  img {
    /* border: 1px solid blue; */
    width: 100%;
    max-height: 100%;
  }
`;

const Hero = ({ heroImg }) => {
  return (
    <>
      <HeroWrapper>
        {heroImg && (
          <ImageContainer>
            <img src={urlFor(heroImg).url()} />
          </ImageContainer>
        )}
      </HeroWrapper>
    </>
  );
};

export default Hero;
