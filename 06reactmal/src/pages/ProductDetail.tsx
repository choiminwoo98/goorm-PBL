import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { item } from "../types";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const productId = params.id;

  const [item, setItem] = useState<item>(); // 초기값을 null로 설정

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        const { data } = response;
        setItem(data);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }, [productId]); // productId가 변경될 때만 useEffect 실행
  console.log(item?.category);
  return (
    <div style={{}}>
      <div
        style={{
          padding: "50px",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img alt={item?.image} src={item?.image} style={{ width: "200px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span>{item?.category}</span>
          <span>{item?.title}</span>
          <span>${item?.price}</span>
          <span>{item?.description}</span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button>장바구니에 담기</button>
            <button onClick={() => navigate("/cart")}>장바구니로 이동</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
