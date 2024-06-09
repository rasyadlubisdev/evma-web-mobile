import React from "react";
import TopUsers from "../components/TopUsers";
import YourRank from "../components/YourRank";
import Users from "../components/Users";

const Connect = () => {
  return (
    <div className="connect-page" style={{ padding: "0 24px" }}>
      <div style={{ padding: "32px 0" }}>
        <h1
          style={{
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "#22413A",
            textAlign: "center"
          }}
        >
          Weekly Top Charisma
        </h1>
      </div>
      <TopUsers />
      <div style={{ padding: "24px 0 16px 0" }}>
        <YourRank />
      </div>
      <Users />
      <div style={{ paddingBottom: "100px" }}></div>
    </div>
  );
};

export default Connect;
