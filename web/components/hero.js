import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/hero.module.css";

import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Index = ({ heroImg }) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={urlFor(heroImg).url()}
          layout="fill"
          height="1200px"
          width="1800px"
        />
      </div>
      <p className="mb-8 border-2 border-red-500">gsdgsdg</p>
    </>
  );
};

export default Index;
