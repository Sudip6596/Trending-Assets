import React from "react";
import "./App.css";
import activity from "./images/activity.svg";
import bitcoin from "./images/btc.svg";
import eth from "./images/eth.svg";
import solana from "./images/sol.svg";
import bnb from "./images/bnb.svg";
import shib from "./images/shib.svg";
import Asset from "./Asset";

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src={activity} alt="activity" />
        <p>Trending Assets</p>
      </div>
      <div className="assets">
        <Asset
          image={bitcoin}
          title={"Bitcoin (BTC)"}
          price={"$31,812.80"}
          percent={"+10%"}
          cost={"$60,000"}
          image1={solana}
          image2={eth}
          image3={bnb}
        />
        <Asset
          image={solana}
          title={"Solana (SOL)"}
          price={"$32.8"}
          percent={"-12.23%"}
          cost={"$60,000"}
          image1={bitcoin}
          image2={eth}
          image3={bnb}
        />
        <Asset
          image={eth}
          title={"Ethereum (ETH)"}
          price={"$1,466.45"}
          percent={"-11.93%"}
          cost={"$60,000"}
          image1={solana}
          image2={bitcoin}
          image3={bnb}
        />
        <Asset
          image={bnb}
          title={"Binance USD (BUSD)"}
          price={"$1.00"}
          percent={"+0.26%"}
          cost={"$60,000"}
          image1={solana}
          image2={eth}
          image3={bnb}
        />
        <Asset
          image={shib}
          title={"Shiba Inu (SHIB)"}
          price={"$0.00000001948"}
          percent={"-8.1%"}
          cost={"$60,000"}
          image1={solana}
          image2={eth}
          image3={bnb}
          minus={"minus"}
        />
      </div>
    </div>
  );
}

export default App;
