import { useNavigate } from "react-router-dom";
import { item } from "../types";
interface ItemProps {
  item: item;
}
const Card: React.FC<ItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "5px",
        display: "flex",
        width: "250px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <img src={item.image} style={{ width: "60px" }} />
      <span
        style={{
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {item.title}
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => navigate(`product/${item.id}`)}>
          장바구니에 담기
        </button>
        <span>$ {item.price}</span>
      </div>
    </div>
  );
};
export default Card;
