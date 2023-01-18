import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer/Footer";
import ImageGallery from "../components/imageGallery/ImageGallery";
import GalleryImage from "../components/galleryImage/GalleryImage";
import styled from "styled-components";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const query = groq`
  *[_type == 'indexPage'][0] {
    ...,
    'post': *[_type == 'post'],
    'referenceImages': *[_type == 'imageGallery'] {
      ...,
    },
  }
`;

const Index = ({ indexPage }) => {
  console.log(indexPage.referenceImages);
  return (
    <>
      <main className="homeWrapper">
        {/* heading: contact, calendar?, gallery?, references? */}
        <Header />
        <Hero heroImg={indexPage?.mainImage} />
        <h5>{indexPage?.heading}</h5>
        <PortableText value={indexPage?.description} />
        <h5>Welcome to a blog!</h5>

        {/* {indexPage.referenceImages && (
          <ImageGallery>
            {indexPage.referenceImages.map((refImages) => {
              return refImages.galleryImages.map((refImage, index) => {
                return (
                  <div
                    key={refImage.caption}
                    className={`${index % 2 == 1 ? "rightGridCol" : ""}`}
                  >
                    <GalleryImage
                      galleryImage={refImage.asset._ref}
                      caption={refImage.caption}
                    />
                  </div>
                );
              });
            })}
          </ImageGallery>
        )} */}
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const indexPage = await client.fetch(query);
  return {
    props: {
      indexPage,
    },
  };
}

export default Index;
