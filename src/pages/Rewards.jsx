import React from "react";
import Points from "../components/Points";
import Title from "../components/Title";
import Gopay from "../components/Gopay";
import Ovo from "../components/Ovo";
import Shopeepay from "../components/Shopeepay";
import CardGift from "../components/CardGift";
import CardVoucher from "../components/CardVoucher";
import Slider from "../components/Slider";

const Rewards = () => {
  return (
    <div className="rewards-page" style={{ padding: "0 24px" }}>
      <div style={{ padding: "32px 0 0 0" }}>
        <Points />
      </div>
      <Title title="Exchange" />
      <Slider>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ width: "144px" }}>
            <Gopay />
          </div>
          <div style={{ width: "144px" }}>
            <Ovo />
          </div>
          <div style={{ width: "144px" }}>
            <Shopeepay />
          </div>
        </div>
      </Slider>
      {/* <div style={{ display: "grid", gap: "20px", justifyContent: "center" }}>
        <Gopay />
        <Ovo />
        <Shopeepay />
      </div> */}
      <Title title="Claim Rewards" />
      <Slider>
        <div style={{ flexShrink: 0, marginRight: "20px" }}>
          <CardGift />
        </div>
        <div style={{ flexShrink: 0, marginRight: "20px" }}>
          <CardVoucher />
        </div>
      </Slider>
      <div style={{ paddingBottom: "100px" }}></div>
    </div>
  );
};

export default Rewards;
