import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const query = groq`
  *[_type == "post"] {
    slug,
  }
`;

const querySinglePage = groq`
  *[_type == 'post' && slug.current == $slug] {
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    body
  }
`;

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      {post?.map((post, index) => {
        console.log("post", post);
        return (
          <div key={index}>
            {post?.title}
            {post?.categories}
            {post?.name}
            {post?.authorImage && (
              <img
                src={urlFor(post?.authorImage).width(50).url()}
                alt={`main picture`}
              />
            )}
            <PortableText value={post?.body} />
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = await client.fetch(querySinglePage, { slug: params.slug });
  return {
    revalidate: 600,
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await client.fetch(query);

  const paths = res.map((post) => ({
    params: { slug: post.slug.current },
  }));
  return { paths, fallback: false };
}

export default Post;
