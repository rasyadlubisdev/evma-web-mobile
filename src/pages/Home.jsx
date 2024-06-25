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

const Home = () => {
  // const [activeService, setActiveService] = useState(false);

  // function getDate() {
  //   const date = new Date();
  //   const isoDate = date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  //   const yyyyMMdd = new Date(isoDate).toISOString().split("T")[0].split("-");
  //   const month = yyyyMMdd[1];
  //   const day = yyyyMMdd[2];
  //   const newDateString = `${month}-${day}`;
  //   return newDateString;
  // }
  // function getTime() {
  //   const date = new Date();
  //   let time = date.toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit"
  //   });
  //   return time;
  // }
  // const [date, setDate] = useState([getDate()]);
  // const [time, setTime] = useState([getTime()]);
  // const [check, setCheck] = useState(false);
  // const [seconds, setSeconds] = useState(3000);

  // function serviceProcess() {
  //   setActiveService(!activeService);
  // }

  // useEffect(() => {
  //   const timer1 = setTimeout(() => {
  //     if (activeService) {
  //       setDate([...date, getDate()]);
  //       setTime([...time, getTime()]);
  //       if (time.length === 1) {
  //         setSeconds(1 * 60 * 1000); //3
  //       } else if (time.length === 2) {
  //         setSeconds(7 * 60 * 1000); //4
  //       } else if (time.length === 3) {
  //         setSeconds(13 * 60 * 1000); //5
  //       } else if (time.length === 4) {
  //         setCheck(true);
  //       }
  //     }
  //   }, seconds);
  //   if (check) {
  //     clearTimeout(timer1);
  //   }
  // }, [time, activeService]);


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
      
      // if (getResult != null) {
      //   setData(JSON.parse(getResult.data))
      // }

      console.log(getResult)
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
  }


  return (
    <>
      <video ref={videoRef} style={visible}>
      </video>
      <div className="home-page" style={{ padding: "0 24px" }}>
        <div style={{ padding: "24px 0 0 0" }}>
          <Header />
        </div>
        <div style={{ padding: "24px 0" }}>
          <StatusPoints points={parseInt(112 + ((getResult != null) ? getResult?.points : 0))} />
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
            <div className="total-bottle" style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>28 pcs</div>
          </div>
          <div className="card-info-tin" style={{ backgroundColor: "#ED4635", height: "185px", width: "132px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="image-circle" style={{ marginTop: "20.6px" }}>
              <img src={imageTin} alt="" />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white", margin: "8px 0 6px 0" }}>Tin Bottles</h3>
            <div className="total-bottle" style={{ fontSize: "14px", fontWeight: "400", color: "white" }}>13 pcs</div>
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
    </>
  );
};

export default Home;
