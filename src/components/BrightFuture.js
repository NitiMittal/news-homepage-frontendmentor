import React from "react";
import { BrightFutureContainer } from "../css/BrightFuture";

const BrightFuture = () => {
  return (
    <BrightFutureContainer>
      <div className="flex-container">
        <h1 className="heading">The Bright Future of Web 3.0?</h1>
        <div>
          <p className="subtitle">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="btn">Read More</button>
        </div>
      </div>
    </BrightFutureContainer>
  );
};

export default BrightFuture;
