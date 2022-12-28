import React from "react";
import { NewsContainer } from "../css/News";

const News = () => {
  return (
    <NewsContainer>
      <h2>New</h2>
      <div className="news">
        <div className="title">Hydrogen VS Electric Cars</div>
        <div className="subtitle">
          Will hydrogen-fueled cars ever catch up to EVs?
        </div>

        <div className="title">The Downsides of AI Artistry</div>
        <div className="subtitle">
          What are the possible adverse effects of on-demand AI image
          generation?
        </div>

        <div className="title">Is VC Funding Drying Up?</div>
        <div className="subtitle">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </div>
      </div>
    </NewsContainer>
  );
};

export default News;
