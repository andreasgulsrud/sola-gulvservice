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

const Hero = ({ heroImg }) => {
  return (
    <>
      {heroImg && (
        <div className={styles.imageContainer}>
          <Image
            src={urlFor(heroImg).url()}
            layout="fill"
            height="1200px"
            width="1800px"
          />
        </div>
      )}
    </>
  );
};

export default Hero;
