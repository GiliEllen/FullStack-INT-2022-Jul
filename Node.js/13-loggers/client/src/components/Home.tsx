import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [selected, setSelected] = useState("");
  const [image, setImage] = useState<any>("");
  const [productInfo, setProductInfo] = useState<any>({});

  const SERVER_URL = "http://localhost:8000";

  const handleGetCategories = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/categories`);
      setCategories(data.categoriesDB);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (ev: any) => {
    try {
      ev.preventDefault();
      const { data } = await axios.post(`${SERVER_URL}/products`, {
        title,
        description,
        price,
        selected,
        image,
      });

      if (data.ok) {
        handleGetProduct(data.productDB._id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetProduct = async (id: any) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/products/${id}`);
      console.log(data)
      setProductInfo(data.productDB);
    } catch (error) {
      console.error(error);
    }
  };

  //handle and convert it in base 64

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onInput={(ev: any) => setTitle(ev.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onInput={(ev: any) => setDescription(ev.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onInput={(ev: any) => setPrice(ev.target.value)}
        />
        <select
          value={selected}
          onChange={(ev: any) => setSelected(ev.target.value)}
        >
          {categories.map((cate, idx) => {
            return (
              <option key={idx} value={cate._id}>
                {cate.title}
              </option>
            );
          })}
        </select>
        <input
          onChange={handleImage}
          type="file"
          name="image"
          id=""
          placeholder="Image"
        />
        <button type="submit">ADD</button>
      </form>
      <div>
        {productInfo.title ? <div>{productInfo.title}</div> : null}
        {productInfo.price ? <div>{productInfo.price}</div> : null}
        {productInfo.description ? <div>{productInfo.description}</div> : null}
        {productInfo.image ? (
          <img src={productInfo.image} alt={productInfo.title} />
        ) : null}
        {productInfo.category ? <div>categoy: {productInfo.category.title}</div> : null}
      </div>
    </>
  );
};

export default Home;
