import React, { useState, useEffect } from "react";
import Points from "../components/Points";
import Title from "../components/Title";
import Gopay from "../components/Gopay";
import Ovo from "../components/Ovo";
import Shopeepay from "../components/Shopeepay";
import CardGift from "../components/CardGift";
import CardVoucher from "../components/CardVoucher";
import Slider from "../components/Slider";
import { auth, db } from "../auth/firebase";
import { doc, getDoc } from "firebase/firestore";

const Rewards = ({ userGlobal }) => {

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);

        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("User Details", userDetails);
        } else {
          console.log("User is not logged in");
        }
      });
    };

    useEffect(() => {
      fetchUserData();
    }, []);

  return (
    <div className="rewards-page" style={{ padding: "0 24px" }}>
      <div style={{ padding: "32px 0 0 0" }}>
        <Points user={userDetails} />
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
