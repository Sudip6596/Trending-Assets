import React, { useEffect, useState } from "react";
import "./asset.css";

function Asset({ image, title, price, percent, cost, image1, image2, image3 }) {
  const [bgcolor, setBgColor] = useState("");

  useEffect((e) => {
    if (percent[0] == "-") {
      setBgColor("#ff4d4d");
    } else {
      setBgColor("#00ffa3");
    }
  }, []);

  return (
    <div className="asset">
      <div className="img-container">
        <img src={image} alt="image" />
      </div>
      <div className="asset-card">
        <div className="asset-card_title">
          <h4>{title}</h4>
        </div>
        <div className="asset-card_price-percent">
          <div className="asset-card_price">{price}</div>
          <div className="asset-card_percent" style={{ color: bgcolor }}>
            {percent}
          </div>
        </div>
        <div>
          <h4>Price</h4>
        </div>
        <div className="asset-card_cost">{cost}</div>
        <div>
          <h4>TVL</h4>
        </div>
        <div className="asset-card_pairs">
          <img src={image1} alt="image" />

          <img src={image2} alt="image" />

          <img src={image3} alt="image" />
        </div>
        <div>
          <h4>Popular pairs</h4>
        </div>
      </div>
    </div>
  );
}

export default Asset;
