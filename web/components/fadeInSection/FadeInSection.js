import React from "react";
import classNames from "classnames";
import css from "./FadeInSection.module.css";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);

  const domRef = React.useRef();

  React.useEffect(() => {
    // console.log(domRef.current);
    if (domRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
          }
        });
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }
  }, [domRef.current]);

  return (
    <div
      className={classNames(css.fadeInSection, { [css.isVisible]: isVisible })}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
