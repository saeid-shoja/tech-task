import React, { useState, useContext } from "react";
import AddToCartButton from "components/addToCart/AddToCartButton";
import { PhotoPart, Header, Cover } from "./DayPhoto.style";
import cover from "assets/Images/cover.jpg";
import data from "constant/data/data.json";
import DayPhotoDetailes from "../Detailes/DayPhotoDetailes";
import { CartContext } from "App";

const DayPhoto = () => {
  let title = "";
  let image = {};
  let price = "";
  const coverTitle = data.map((product) => {
    if (product.featured) {
      title = product.name;
      image = product.image;
      price = product.price;
    }
  });

  const { setCart, cart, setCartDetailes } = useContext(CartContext);
  const addToCartHandler = () => {
    const newCartDetailes = {
      price: price,
      img: image,
      name: title,
    };
    setCartDetailes(newCartDetailes);
    setCart([newCartDetailes, ...cart]);
  };

  return (
    <PhotoPart>
      <Header>
        <p>{title}</p>
        <AddToCartButton onAdd={addToCartHandler} />
      </Header>
      <Cover>
        <img src={image.src} alt={image.alt} />
        <p>Photo of the day</p>
      </Cover>
      <DayPhotoDetailes coverTitle={coverTitle} />
    </PhotoPart>
  );
};

export default DayPhoto;
