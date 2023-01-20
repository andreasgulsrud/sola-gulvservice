import css from "./DescField.module.css";
import { PortableText } from "@portabletext/react";

const DescField = ({ title, desc }) => {
  return (
    <>
      <h5 className={css.descFieldTitle}>{title}</h5>
      <section className={css.descFieldDesc}>
        <PortableText value={desc} />
      </section>
    </>
  );
};

export default DescField;
