import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Hero from "../components/hero";
import ImageGallery from "../components/imageGallery";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const query = groq`
  *[_type == "indexPage"][0] {
    ...,
    "post": *[_type == "post"]
  }
`;

const Index = ({ indexPage }) => {
  console.log(indexPage);
  return (
    <>
      {/* heading: contact, calendar?, gallery?, references? */}
      <Hero heroImg={indexPage?.mainImage} />
      <h1>{indexPage?.heading}</h1>
      <PortableText value={indexPage?.description} />
      <h1 className="text-red-500">Welcome to a blog!</h1>
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
