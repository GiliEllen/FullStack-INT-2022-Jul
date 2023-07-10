import axios from "axios";
import React, { useState } from "react";
import { SERVER_URL } from "../App";

const Item = ({ product, handleAddToCart, setProducts }: any) => {
  const [item, setItem] = useState("");

  const handleSavePrice = async () => {
    const { data } = await axios.patch(`${SERVER_URL}/products/${product.id}`, {item});
    console.log(data);
    setProducts(data.products)
  };

  return (
    <div
      style={{
        border: "1px solid #9f9f9f",
        borderRadius: 8,
        padding: 5,
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "150px", borderRadius: 8 }}
      />
      <h5>{product.title}</h5>
      <p>{product.price / 100}$</p>
      <button onClick={handleAddToCart} value={product.id}>
        ADD To Cart
      </button>
      <input
        type="text"
        placeholder="change Price"
        value={item}
        onInput={(ev: any) => {
          setItem(ev.target.value);
        }}
      />
      <button onClick={handleSavePrice}>Save</button>
    </div>
  );
};

export default Item;
