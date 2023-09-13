import { useState } from "react";

const Item = ({ todo, onDelete, onUpdate }) => {
  console.log(todo.item);
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    border: "1px solid #EEEEEE",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    margin: "20px",
    transition: "transform 0.2s, box-shadow 0.2s",
  };
  const hoverStyle = {
    transform: "scale(1.05)",
  };
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
      >
        <span>{todo.item}</span>
        <span>{todo.cost}</span>
        <div style={{ display: "flex", gap: "5px" }}>
          <div style={{ cursor: "pointer" }} onClick={onUpdate}>
            <svg
              height="18px"
              version="1.1"
              viewBox="0 0 18 18"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="current"
                fillRule="evenodd"
                id="Page-1"
                stroke="current"
                strokeWidth="1"
              >
                <g
                  fill="#6EC171"
                  id="Core"
                  transform="translate(-213.000000, -129.000000)"
                >
                  <g id="create" transform="translate(213.000000, 129.000000)">
                    <path
                      d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ cursor: "pointer" }} onClick={onDelete}>
            <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="red"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
