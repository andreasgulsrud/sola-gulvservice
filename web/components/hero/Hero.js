import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import classNames from "classnames";
import css from "./Hero.module.css";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Hero = ({ heroImg }) => {
  return (
    <>
      <section className={classNames(css.heroWrapper)}>
        {heroImg && (
          <div className={classNames(css.heroImageContainer)}>
            <img src={urlFor(heroImg).url()} />
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
