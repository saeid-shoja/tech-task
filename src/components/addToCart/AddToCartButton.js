import React from "react";
import { AddButton } from "./AddToCartButton.style";

const AddToCartButton = ({ onAdd }) => {
  return <AddButton onClick={onAdd}>ADD TO CART</AddButton>;
};

export default AddToCartButton;
