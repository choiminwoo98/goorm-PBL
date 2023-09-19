import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { item } from "../types";
const Main = () => {
  const categories = [
    ["", "모두"],
    ["electronics", "전자제품"],
    ["jewelery", "쥬얼리"],
    ["men's clothing", "남성의류"],
    ["women's clothing", "여성의류"],
  ];
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products"
      )
      .then((response) => {
        const { data } = response;
        setItems(data);
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        if (!data || typeof data !== "object") {
          throw new TypeError("Oops, we haven't got JSON!");
        }
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }, [category]);

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category[0])}
            style={{
              margin: "10px",
            }}
          >
            {category[1]}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "80%",
          gap: "10px",
        }}
      >
        {items.map((item: item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};
export default Main;
