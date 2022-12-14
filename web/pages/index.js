import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Hero from "../components/hero";
import Header from "../components/header";
import GalleryImage from "../components/galleryImage";
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

const ImageGalleryContainer = styled.section`
  /* border: 3px solid red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 150px;
  column-gap: 22px;
  row-gap: 22px;
`;

const Index = ({ indexPage }) => {
  // console.log(indexPage);
  return (
    <>
      {/* heading: contact, calendar?, gallery?, references? */}
      <Header></Header>
      <Hero heroImg={indexPage?.mainImage} />
      <h1>{indexPage?.heading}</h1>
      <PortableText value={indexPage?.description} />
      <h1>Welcome to a blog!</h1>
      {indexPage.post.length > 0 &&
        indexPage.post.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      <ImageGalleryContainer>
        {indexPage.referenceImages.map((test) => {
          console.log("test**", test);
          return test.galleryImages.map((images) => {
            // console.log("********", images.caption);
            return (
              <div key={images.caption}>
                <GalleryImage
                  galleryImage={images.asset._ref}
                  caption={images.caption}
                />
              </div>
            );
          });
        })}
      </ImageGalleryContainer>
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
