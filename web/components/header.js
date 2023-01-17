import styled from "styled-components";
import { useEffect, useState } from "react";

const HeadingWrapper = styled.div`
  background-color: transparent;
  height: 7rem;
  padding: 1rem 1rem;
  position: sticky;
  top: 0px;
  z-index: 1000;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  z-index: 1000;
  &.hide {
    top: -7rem;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Subheading = styled.p`
  margin: 0;
  font-weight: 300;
  letter-spacing: 2.4px;
`;

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
      <HeadingWrapper
        className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <Heading>ABCD</Heading>
        <Subheading>QWERTYASDF</Subheading>
      </HeadingWrapper>
    </>
  );
};

export default Header;
