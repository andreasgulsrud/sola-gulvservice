import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";
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

const ImageGalleryContainer = styled.section`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 200px 150px;
  column-gap: 22px;
  row-gap: 22px;
`;

const Index = ({ indexPage }) => {
  // console.log(indexPage);
  return (
    <>
      <main className="homeWrapper">
        {/* heading: contact, calendar?, gallery?, references? */}
        <Header />
        <Hero heroImg={indexPage?.mainImage} />

        <h5>{indexPage?.heading}</h5>
        <PortableText value={indexPage?.description} />
        <h5>Welcome to a blog!</h5>
        {/* {indexPage.post.length > 0 &&
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
        )} */}
        <ImageGalleryContainer>
          {indexPage.referenceImages.map((refImages) => {
            return refImages.galleryImages.map((refImage) => {
              // console.log("********", images.caption);
              return (
                <div key={refImage.caption}>
                  <GalleryImage
                    galleryImage={refImage.asset._ref}
                    caption={refImage.caption}
                  />
                </div>
              );
            });
          })}
        </ImageGalleryContainer>
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
