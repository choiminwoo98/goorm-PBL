import { useEffect, useState } from "react";
import { store } from "../app/store";
import { item } from "../types";
import axios from "axios";

const Cart = () => {
  const userid = store.getState().auth.user?.uid;
  const [items, setItem] = useState([]); // 초기값을 null로 설정
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/user/1`)
      // .get(`https://fakestoreapi.com/carts/user/${userid}`)
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
  }, [userid]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div>장바구니</div>
    </div>
  );
};
export default Cart;
