import { useEffect, useState } from "react";
import css from "./Header.module.css";

const Header = () => {
  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  return (
    <>
      <div
        className={`${css.header} ${
          scrollDirection === "down" ? `${css.hide}` : "show"
        }`}
      >
        <h1 className={css.heading}>ABCD</h1>
        <p className={css.subHeading}>QWERTYASDFE</p>
      </div>
    </>
  );
};

export default Header;
