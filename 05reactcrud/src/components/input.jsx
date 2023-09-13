import Button from "./button";

const Input = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
          color: "#e9b872",
        }}
      >
        <label>{props.label}</label>
        <input
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
        />
      </div>
    </>
  );
};
export default Input;
