const Button = ({ text, type, color, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        width: "100%",
        cursor: "pointer",
        padding: 14,
        fontSize: 16,
        color: type ? "#EAF9E7" : color,
        borderRadius: 12,
        outline: "none",
        border: type ? "none" : `1px solid ${color}`,
        background: type
          ? "linear-gradient(to right, #11998e, #38ef7d)"
          : "none"
      }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Beli Proyek",
  type: true,
  color: "#E72525"
};

export default Button;
