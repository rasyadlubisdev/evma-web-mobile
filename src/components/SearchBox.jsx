import searchIcon from "./icons/search.svg";

const SearchBox = ({ text }) => {
  return (
    <div
      className="search-box"
      style={{
        display: "flex",
        width: "100%",
        padding: "12px 0",
        backgroundColor: "#EFEDF4",
        borderRadius: 12
      }}
    >
      <img
        src={searchIcon}
        alt=""
        style={{
          margin: "0 4px 0 18px"
        }}
      />
      <input
        type="text"
        placeholder={text}
        style={{
          width: "100%",
          outline: "none",
          fontSize: 14,
          color: "#A19CB9",
          display: "block",
          background: "none",
          border: "none"
        }}
      />
    </div>
  );
};

SearchBox.defaultProps = {
  text: "Search You Want"
};

export default SearchBox;
