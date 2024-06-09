import SearchBox from "./../components/SearchBox";
import Profile from "./../components/Profile";
import Switch from "./../components/Switch";
import Button from "./../components/Button";
import documentSearchIcon from "./../components/icons/document-search.svg";
import bellIcon from "./../components/icons/bell.svg";
import documentTextIcon from "./../components/icons/document-text.svg";
import shieldIcon from "./../components/icons/shield-exclamation.svg";
import globeIcon from "./../components/icons/globe-alt.svg";
import moonIcon from "./../components/icons/dark-mode.svg";
import arrowIcon from "./../components/icons/arrow.svg";

import { useState } from "react";

const Settings = () => {
  const [contentIcons, setContentIcons] = useState([
    [documentSearchIcon, "Recommendations"],
    [bellIcon, "Notifications"],
    [documentTextIcon, "Terms & Conditions"],
    [shieldIcon, "Privacy Policy"]
  ]);

  return (
    <div className="settings-page" style={{ padding: "0 24px" }}>
      <div className="search-section" style={{ padding: "48px 0 24px 0" }}>
        <SearchBox text="Search..." />
      </div>
      <header
        className="card flex justify-center items-center"
        style={{ padding: "16px 0" }}
      >
        <Profile bigger={true} />
        <div className="text-content" style={{ marginLeft: 16 }}>
          <div className="text-name hs semi-bold" style={{ color: "#22413A" }}>
            Rasyad Lubis
          </div>
          <div className="text-gmail md regular" style={{ color: "#708A84" }}>
            rasyad******@gmail.com
          </div>
        </div>
      </header>
      <h2 className="text-head" style={{ color: "#22413A" }}>
        Manage Content
      </h2>
      <div className="content-settings card" style={{ padding: "14px 12px" }}>
        {contentIcons.map((icon, index) => {
          return (
            <div
              className="choice flex items-center justify-between"
              key={index}
              style={{
                marginBottom: index === contentIcons.length - 1 ? 0 : 16
              }}
            >
              <div className="text md medium flex items-center">
                <img src={icon[0]} alt="" style={{ marginRight: 6 }} />
                {icon[1]}
              </div>
              <img src={arrowIcon} alt="" />
            </div>
          );
        })}
      </div>
      <h2 className="text-head" style={{ color: "#22413A" }}>
        Options
      </h2>
      <div
        className="preference-settings card"
        style={{ padding: "14px 12px", marginBottom: 32 }}
      >
        <div
          className="choice flex items-center justify-between"
          style={{
            marginBottom: 16
          }}
        >
          <div className="text md medium flex items-center">
            <img src={globeIcon} alt="" style={{ marginRight: 6 }} />
            Language
          </div>
          <div className="arrow-icon sm regular flex items-center">
            English
            <img src={arrowIcon} alt="" style={{ marginLeft: 6 }} />
          </div>
        </div>

        <div className="choice flex items-center justify-between">
          <div className="text md medium flex items-center">
            <img src={moonIcon} alt="" style={{ marginRight: 6 }} />
            Dark mode
          </div>
          <div
            className="arrow-icon sm regular flex items-center"
            style={{ color: "#22413A" }}
          >
            <Switch />
            <img src={arrowIcon} alt="" style={{ marginLeft: 6 }} />
          </div>
        </div>
      </div>
      <Button type={false} text="Log Out" />
      <div
        className="footer"
        style={{
          marginBottom: 100
        }}
      ></div>
    </div>
  );
};

export default Settings;
