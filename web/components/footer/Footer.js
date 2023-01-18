import classNames from "classnames";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classNames(css.footerWrapper)}>
        <section className={css.footerLogoWrapper}>
          <h2 className={css.footerLogoUpper}>ABCD</h2>
          <p className={css.footerLogoLower}>QWERTYASDFE</p>
        </section>
        <section className={css.footerInfoWrapper}>
          <h2>Avtal en befaring</h2>
          <p>Navn Navnesen</p>
          <p>+47 45 678 91</p>
          <p>post@mittdomene.no</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
