import React from "react";
import { ImageContainer } from "../css/Image";

const Image = () => {
  return (
    <ImageContainer>
      <picture>
        <source
          media="(min-width:1440px)"
          srcSet="../images/image-web-3-desktop.jpg"
          className="block-img"
        />
        <source
          media="(min-width:465px)"
          srcSet="../images/image-web-3-mobile.jpg"
          className="block-img"
        />
        <img
          src="../images/image-web-3-mobile.jpg"
          alt="blocks"
          className="block-img"
        />
      </picture>
    </ImageContainer>
  );
};

export default Image;
