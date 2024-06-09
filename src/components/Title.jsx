import React from "react";

const Title = ({ title }) => {
  return (
    <h2
      style={{
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        margin: "24px 0 20px 0",
        textTransform: "capitalize",
        color: "#22413A"
      }}
    >
      {title}
    </h2>
  );
};

Title.defaultProps = {
  title: "This is title"
};

export default Title;
