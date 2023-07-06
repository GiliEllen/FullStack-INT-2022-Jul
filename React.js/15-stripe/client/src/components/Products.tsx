import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../App";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
interface ProductInCart {
  id: number;
  title: string;
  price: number;
  amount: number;
  thumbnail: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const navigate = useNavigate()

  const handleGetProducts = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/products`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (ev: any) => {
    const id = ev.target.value;

    const productToAdd = products.filter((item) => item.id == id)[0];

    const itemIndex = cart.findIndex((cartItem) => cartItem.id == id);

    if (itemIndex == -1) {
      setCart([
        ...cart,
        {
          id: productToAdd.id,
          title: productToAdd.title,
          price: productToAdd.price,
          amount: 1,
          thumbnail: productToAdd.thumbnail,
        },
      ]);
    } else {
      const updatedCart = cart.map((cartItem, idx) => {
        if (idx == itemIndex) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        } else {
          return cartItem;
        }
      });

      setCart(updatedCart);
    }
  };

  const handleSubmit = async () => {
    try {
        const {data} = await axios.post(`${SERVER_URL}/api/checkout`, {cart})
        if (data.ok) {
            window.location = data.url 
        }
    } catch (error) {
        console.error(error)
    }
  }
  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
      <div>
        <h1>Cart:</h1>
        <button onClick={handleSubmit}>Checkout</button>
        {cart.length == 0 ? (
          <p>No Items in cart</p>
        ) : (
          cart.map((cartItem) => {
            return (
              <div
                style={{
                  border: "1px solid #9f9f9f",
                  borderRadius: 8,
                  padding: 5,
                }}
              >
                <img
                  src={cartItem.thumbnail}
                  alt={cartItem.title}
                  style={{ width: "50px", borderRadius: 8 }}
                />
                <h5>{cartItem.title}</h5>
                <p>{cartItem.price/100}$</p>
                <p>amount: {cartItem.amount}</p>
              </div>
            );
          })
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
          padding: 100,
        }}
      >
        <h1>Our Products:</h1>
        {products.length == 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => {
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
                <p>{product.price/100}$</p>
                <button onClick={handleAddToCart} value={product.id}>
                  ADD To Cart
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Products;
