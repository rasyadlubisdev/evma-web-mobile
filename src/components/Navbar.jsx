import "./../styles.css";
import HomeIcon from "./icons/HomeIcon";
import ConnectIcon from "./icons/ConnectIcon";
import SettingsIcon from "./icons/SettingsIcon";
import MapIcon from "./icons/MapIcon";
import RewardIcon from "./icons/RewardIcon";

import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = ({ data }) => {
  const location = useLocation();
  const [click, setClick] = useState(false);

  function clicked(a) {
    setClick(!click);
  }

  const [icons, setIcons] = useState([
    [<HomeIcon click={click} location={location} />, "Home", "/"],
    [<ConnectIcon click={click} location={location} />, "Connect", "/connect"],
    [<MapIcon click={click} location={location} />, "Bins Map", "/binsmap"],
    [<RewardIcon click={click} location={location} />, "Rewards", "/rewards"],
    [
      <SettingsIcon click={click} location={location} />,
      "Settings",
      "/settings"
    ]
  ]);

  useEffect(() => {
    setIcons([
      [
        <HomeIcon click={click} location={location} path={icons[0][2]} />,
        "Home",
        "/"
      ],
      [
        <ConnectIcon click={click} location={location} path={icons[1][2]} />,
        "Connect",
        "/connect"
      ],
      [
        <MapIcon click={click} location={location} path={icons[2][2]} />,
        "Bins Map",
        "/binsmap"
      ],
      [
        <RewardIcon click={click} location={location} path={icons[3][2]} />,
        "Rewards",
        "/rewards"
      ],
      [
        <SettingsIcon click={click} location={location} path={icons[4][2]} />,
        "Settings",
        "/settings"
      ]
    ]);
  }, [click]);

  return (
    <div
      className="navbar medium flex justify-between"
      style={{
        padding: "8px 16px",
        fontSize: 12,
        borderTop: "1px solid #9EAE9B",
        backgroundColor: "#FFF",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "10000",
        visibility:
          location.pathname === icons[0][2] ||
          location.pathname === icons[1][2] ||
          location.pathname === icons[2][2] ||
          location.pathname === icons[3][2] ||
          location.pathname === icons[4][2]
            ? "visible"
            : "hidden"
      }}
    >
      {icons.map((icon) => {
        return (
          <Link to={icon[2]} style={{ textDecoration: "none" }} key={icon[1]}>
            <div
              onClick={clicked}
              className="icon flex flex-col items-center"
              style={{
                width: 62,
                color: "#C9D6C7"
              }}
            >
              {icon[0]}
              <div
                className={
                  location.pathname == icon[2]
                    ? "nav-color-active"
                    : "nav-color"
                }
              >
                {icon[1]}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

Navbar.defaultProps = {
  data: 1
};

export default Navbar;
