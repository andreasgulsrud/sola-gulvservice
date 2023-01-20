import Head from "next/head";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Hero from "../components/hero/Hero";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ImageGallery from "../components/imageGallery/ImageGallery";
import GalleryImage from "../components/galleryImage/GalleryImage";
import DescField from "../components/descriptionField/DescField";
import styled from "styled-components";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const query = groq`
  *[_type == 'indexPage'][0] {
    ...,
    "settings": *[_type == "siteSettings"][0] {
      ...,
    }
  }
`;

const Index = ({ indexPage }) => {
  console.log(indexPage);
  return (
    <>
      <main className="homeWrapper">
        <Head>
          <meta
            name="title"
            property="og:title"
            content={indexPage.settings.metaTitle}
          />
          <meta
            name="description"
            property="og:description"
            content={indexPage.settings.metaDescription}
          />
          <meta
            name="image"
            property="og:image"
            content={urlFor(indexPage.settings.metaImage).url()}
          />
        </Head>
        <Header />
        <Hero heroImg={indexPage?.mainImage} />
        <DescField title={indexPage?.heading} desc={indexPage?.description} />
        {indexPage.galleryImages && (
          <ImageGallery imageGalleryHeading={indexPage.imageGalleryHeading}>
            {indexPage.galleryImages.map((refImage, index) => {
              // console.log(refImage);
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
            })}
          </ImageGallery>
        )}
      </main>
      <Footer
        subheading={indexPage.footerHeading}
        contactName={indexPage.footerName}
        contactPhone={indexPage.footerPhone}
        contactMail={indexPage.footerMail}
      />
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
