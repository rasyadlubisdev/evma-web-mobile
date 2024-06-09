import React, { useEffect } from "react";
import "./styles.css";
// import Home from "./pages/Home";
// import Rewards from "./pages/Rewards";
// import Connect from "./pages/Connect";
// import BinsMap from "./pages/BinsMap";
// import Settings from "./pages/Settings";
// import Navbar from "./components/Navbar";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://biven.netlify.app/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#EFEDF4"
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 500,
          height: "100vh",
          backgroundColor: "#FFF",
          margin: "0 auto",
          position: "relative",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          Our domain has changed
          <br />
          We will redirect you to
          <br />
          <a href="https://biven.netlify.app/">https://biven.netlify.app/</a>
        </div>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/binsmap" element={<BinsMap />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Navbar data={5} />
        </Router> */}
      </div>
    </div>
  );
}

export default App;
