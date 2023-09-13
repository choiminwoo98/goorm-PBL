import { useState } from "react";
const Button = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle = {
    backgroundColor: "#8ea959",
    border: "none",
    color: "white",
    padding: "10px",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "transform 0.2s, box-shadow 0.2s",
  };
  const hoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0px 20px 20px rgba(0,0,0,0.2)",
  };

  return (
    <button
      style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
