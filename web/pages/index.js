import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const query = groq`
  *[_type == "frontPage"][0] {
    ...,
    "post": *[_type == "post"]
  }
`;

const Index = ({ frontPage }) => {
  console.log(frontPage.post);
  return (
    <div>
      <div>tests</div>
      <h1>{frontPage.heading}</h1>
      <PortableText value={frontPage.description} />
      <div>
        <img
          src={urlFor(frontPage.mainImage).width(50).url()}
          alt={`main picture`}
        />
      </div>
      <h1>Welcome to a blog!</h1>
      {frontPage.post.length > 0 &&
        frontPage.post.map(
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
    </div>
  );
};

export async function getStaticProps() {
  const frontPage = await client.fetch(query);
  return {
    props: {
      frontPage,
    },
  };
}

export default Index;
