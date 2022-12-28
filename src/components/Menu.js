import React, { useState, useEffect } from "react";
import { MenuContainer } from "../css/Menu";

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1440px)");

    if (media.matches === isDesktop) {
      setIsDesktop(media.matches);
      setToggle(false);
    }
    const listener = () => setIsDesktop(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [isDesktop]);

  return (
    <MenuContainer>
      <div className="main-menu">
        <img src="../images/logo.svg" alt="logo" className="logo" />
        {isDesktop && (
          <ul className="desktop-menu">
            <li>
              <a href="##">Home</a>
            </li>
            <li>
              <a href="##">New</a>
            </li>
            <li>
              <a href="##">Popular</a>
            </li>
            <li>
              <a href="##">Trending</a>
            </li>
            <li>
              <a href="##">Categories</a>
            </li>
          </ul>
        )}
        {!isDesktop && (
          <img
            src="../images/icon-menu.svg"
            alt="hamburger"
            className="hamburger"
            onClick={() => setToggle(true)}
          />
        )}
      </div>

      <div className={`menu ${toggle ? "show" : "hide"}`}>
        <img
          src="../images/icon-menu-close.svg"
          alt="cross"
          className="close"
          onClick={() => setToggle(false)}
        />
        <ul className="mobile-menu">
          <li className="home">
            <a href="##">Home</a>
          </li>
          <li>
            <a href="##">New</a>
          </li>
          <li>
            <a href="##">Popular</a>
          </li>
          <li>
            <a href="##">Trending</a>
          </li>
          <li>
            <a href="##">Categories</a>
          </li>
        </ul>
      </div>
    </MenuContainer>
  );
};

export default Menu;
