import React from "react";
import { CardBoxContainer } from "../css/CardBox";

const CardBox = () => {
  return (
    <CardBoxContainer>
      <div className="card-container">
        <img
          src="../images/image-retro-pcs.jpg"
          alt="retro"
          className="image"
        />
        <div className="content-container">
          <div className="number">01</div>
          <div className="title">Reviving Retro PCs</div>
          <div className="subtitle">
            What happens when old PCs are given modern upgrades?
          </div>
        </div>
      </div>

      <div className="card-container">
        <img
          src="../images/image-top-laptops.jpg"
          alt="laptop"
          className="image"
        />
        <div className="content-container">
          <div className="number">02</div>
          <div className="title">Top 10 Laptops of 2022</div>
          <div className="subtitle">
            Our best picks for various needs and budgets.
          </div>
        </div>
      </div>

      <div className="card-container">
        <img
          src="../images/image-gaming-growth.jpg"
          alt="retro"
          className="image"
        />
        <div className="content-container">
          <div className="number">03</div>
          <div className="title">The Growth of Gaming</div>
          <div className="subtitle">
            How the pandemic has sparked fresh opportunities.
          </div>
        </div>
      </div>
    </CardBoxContainer>
  );
};

export default CardBox;
