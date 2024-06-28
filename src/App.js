import React, { useState, useEffect } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Connect from "./pages/Connect";
import BinsMap from "./pages/BinsMap";
import Settings from "./pages/Settings";
import Scanner from "./pages/Scanner";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { auth, db } from "./auth/firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     window.location.replace("https://biven.netlify.app/");
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      // console.log("INI USER", user)
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          overflowX: "hidden"
        }}
      >
        {/* <div style={{ textAlign: "center" }}>
          Our domain has changed
          <br />
          We will redirect you to
          <br />
          <a href="https://biven.netlify.app/">https://biven.netlify.app/</a>
        </div> */}
        <Router>
          <Routes>
            <Route path="/" element={ user ? <Home userGlobal={user} /> : <Navigate to="/signup" /> } />
            <Route path="/rewards" element={ user ? <Rewards userGlobal={user} /> : <Navigate to="/signup" /> } />
            <Route path="/connect" element={ user ? <Connect /> : <Navigate to="/signup" /> } />
            <Route path="/binsmap" element={ user ? <BinsMap /> : <Navigate to="/signup" /> } />
            <Route path="/settings" element={ user ? <Settings /> : <Navigate to="/signup" /> } />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Navbar data={5} />
        </Router>
      </div>
    </div>
  );
}

export default App;
