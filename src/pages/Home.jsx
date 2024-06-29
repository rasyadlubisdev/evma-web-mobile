import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import StatusPoints from "../components/StatusPoints";
import Title from "../components/Title";
import ServiceButton from "../components/ServiceButton";
import Timeline from "../components/Timeline";
import WetOrganic from "../components/WetOrganic";
import DryOrganic from "../components/DryOrganic";
import NonOrganic from "../components/NonOrganic";
import Hazardous from "../components/Hazardous";
import CardEvent from "../components/CardEvent";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import QrScanner from 'qr-scanner';
import { useStepContext } from "@mui/material";
import imageBottle from "../assets/images/bottle_circle.png";
import imageTin from "../assets/images/tin_circle.png";
import { auth, db } from "../auth/firebase";
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";

const Home = ({ userGlobal }) => {

    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);

        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          // console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      });
    };

    useEffect(() => {
      fetchUserData();
    }, []); // kalau ininya [] dihapus atau diisi [userDetails] bakal ngeprint terus console.lognya, tapi jadinya realtime

    const addPoint = async (user) => {
      try {
          const docRef = await updateDoc(doc(db, "Users", userGlobal.uid), {
            points: parseInt(userDetails.points + ((getResult != null) ? getResult?.points : 0)),
            bottles_count: parseInt(userDetails.bottles_count + ((getResult != null) ? getResult?.bottles_count : 0)),
            tins_count: parseInt(userDetails.tins_count + ((getResult != null) ? getResult?.tins_count : 0)),
          });
          console.log("ADD POINT", user)
          console.log("GET RESULTS?", getResult?.points)
          console.log("USER GLOBAL", userGlobal.uid)
          // console.log("Document written with ID: ", docRef.id);
          console.log("DOC REF", docRef)
        }
        catch (user) {
          console.error("Error adding document: ", user);
        }
    }

    const videoRef = useRef()
    const [getResult, setGetResult] = useState(null)
    const [visible, setVisible] = useState({display: "hidden", opacity: "0", width: "0", height: "0"})
    
    let scanner;
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };      

    useEffect(() => {
      const videoEl = videoRef.current

      scanner = new QrScanner(videoEl, result => setGetResult(JSON.parse(result.data)), {
          returnDetailedScanResult: true
      });
      addPoint()
      
      // if (getResult != null) {
      //   setData(JSON.parse(getResult.data))
      // }

      // console.log(getResult)
  })

  async function snapshot() {
      if (scanner != undefined) {
        scanner.start()
        await sleep(2000);
        scanner.stop()
      }
  }

  async function scan() {
    setVisible({display: "block", opacity: "1", width: "auto", height: "100vh", right: "-500px"})
    snapshot()
    await sleep(2000);
    setVisible({display: "hidden", opacity: "0", width: "0", height: "0"})
    window.location.reload(false)
  }


  return (
    <>
      <video ref={videoRef} style={visible}>
      </video>
      {
        userDetails ? (
          <div className="home-page" style={{ padding: "0 24px" }}>
            <div style={{ padding: "24px 0 0 0" }}>
              <Header user={userDetails} />
            </div>
            <div style={{ padding: "24px 0" }}>
              {/* <StatusPoints points={parseInt(112 + ((getResult != null) ? getResult?.points : 0))} /> */}
              <StatusPoints points={userDetails.points} />
            </div>
            {/* {activeService ? (
              <>
                {" "}
                <Title title="In Process" />
                <Timeline date={date} time={time} />{" "}
              </>
            ) : (
              <ServiceButton onClick={serviceProcess} />
            )} */}
            {/* <Link to="/scanner" style={{ textDecoration: "none" }}>
            </Link> */}
            <ServiceButton onClick={scan} />
            <Title title="Your Trash" />
            <div className="info-waste" style={{ display: "flex", justifyContent: "space-around" }}>
              <div className="card-info-bottle" style={{ backgroundColor: "#00AEAD", height: "185px", width: "132px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="image-circle" style={{ marginTop: "16.24px" }}>
                  <img src={imageBottle} alt="" />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white", margin: "8px 0 6px 0" }}>Bottles</h3>
                <div className="total-bottle" style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>{userDetails.bottles_count} pcs</div>
              </div>
              <div className="card-info-tin" style={{ backgroundColor: "#ED4635", height: "185px", width: "132px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="image-circle" style={{ marginTop: "20.6px" }}>
                  <img src={imageTin} alt="" />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white", margin: "8px 0 6px 0" }}>Tin Bottles</h3>
                <div className="total-bottle" style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>{userDetails.tins_count} pcs</div>
              </div>
            </div>
            <Title title="Events For You" />
            <Slider>
              <div
                style={{
                  flexShrink: 0,
                  padding: "0 20px 100px 0"
                }}
              >
                <CardEvent />
              </div>
            </Slider>
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </>
  );
};

export default Home;
