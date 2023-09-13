import { useState } from "react";
import "./App.css";
import Box from "./components/box";

function App() {
  const [totalCost, setTotalCost] = useState(0); // Step 1: Set up a state
  const [notification, setNotification] = useState("");
  const handleTotalCost = (sum) => {
    setTotalCost(sum);
  };
  const handleNotify = (action) => {
    switch (action) {
      case "add":
        setNotification("추가");
        break;
      case "update":
        setNotification("수정");
        break;
      case "delete":
        setNotification("삭제");
        break;
      default:
        setNotification("");
    }
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };
  return (
    <div className="Wrapper">
      <div
        style={{
          textAlign: "center",
          display: notification ? "block" : "none",
          background: notification === "삭제" ? "red" : "green",
          color: "white",
          padding: "10px",
        }}
      >
        아이템이 {notification}되었습니다
      </div>
      <h1>예산 계산기</h1>
      <Box onTotalCostChange={handleTotalCost} onNotify={handleNotify} />
      <h2
        style={{
          textAlign: "right",
        }}
      >
        총지출: {totalCost}
      </h2>
    </div>
  );
}

export default App;
