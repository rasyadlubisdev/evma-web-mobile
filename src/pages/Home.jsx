import React, { useState, useEffect } from "react";
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

  return (
    <div className="home-page" style={{ padding: "0 24px" }}>
      <div style={{ padding: "24px 0 0 0" }}>
        <Header />
      </div>
      <div style={{ padding: "24px 0" }}>
        <StatusPoints />
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
      <Link to="/scanner" style={{ textDecoration: "none" }}>
        <ServiceButton />
      </Link>
      <Title title="Your Trash" />
      <Slider>
        <div style={{ flexShrink: 0, marginRight: "20px" }}>
          <WetOrganic />
        </div>
        <div style={{ flexShrink: 0, marginRight: "20px" }}>
          <DryOrganic />
        </div>
        <div style={{ flexShrink: 0, marginRight: "20px" }}>
          <NonOrganic />
        </div>
        <div style={{ flexShrink: 0, marginRight: "20px" }}>
          <Hazardous />
        </div>
      </Slider>
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
  );
};

export default Home;
