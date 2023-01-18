import classNames from "classnames";
import css from "./Footer.module.css";

const Footer = ({ subheading, contactName, contactPhone, contactMail }) => {
  return (
    <>
      <footer className={classNames(css.footerWrapper)}>
        <section className={css.footerLogoWrapper}>
          <h2 className={css.footerLogoUpper}>ABCD</h2>
          <p className={css.footerLogoLower}>QWERTYASDFE</p>
        </section>
        <section className={css.footerInfoWrapper}>
          <h2>{subheading}</h2>
          <p>{contactName}</p>
          <p>{contactPhone}</p>
          <p>{contactMail}</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
