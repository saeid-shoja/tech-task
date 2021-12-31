import React from "react";
import { FilterBox, Hr } from "./Filtering.style";
import "./filtering.css";

const Filtering = ({
  categoryFiltering,
  setCategoryFiltering,
  priceFiltering,
  setPriceFiltering,
}) => {
  const categoryFilterHandler = (e) => {
    if (e.target.checked) {
      setCategoryFiltering(() => [...categoryFiltering, e.target.value]);
    } else {
      setCategoryFiltering(() =>
        categoryFiltering.filter((elem, index, self) => elem !== e.target.value)
      );
    }
  };

  const priceFilterHandler = (e) => {
    setPriceFiltering(e.target.value);
  };

  return (
    <FilterBox>
      <label className="container">
        People
        <input
          type="checkbox"
          value="People"
          id="people"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />
      <label className="container">
        Premium
        <input
          type="checkbox"
          value="Premium"
          id="Premium"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />
      <label className="container">
        Pets
        <input
          type="checkbox"
          value="Pets"
          id="Pets"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />
      <label className="container">
        Food
        <input
          type="checkbox"
          value="Food"
          id="Food"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />
      <label className="container">
        Landmarks
        <input
          type="checkbox"
          value="Landmarks"
          id="Landmarks"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />
      <label className="container">
        Cities
        <input
          type="checkbox"
          value="Cities"
          id="Cities"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />
      <label className="container">
        Nature
        <input
          type="checkbox"
          value="Nature"
          id="Nature"
          onChange={categoryFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <br />

      <Hr />

      <p>Price range</p>

      <label className="container">
        Lower than $20
        <input
          type="radio"
          name="price"
          value="L20"
          id="L20"
          onChange={priceFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <label className="container">
        $20 - $100
        <input
          name="price"
          type="radio"
          value="20-100"
          id="20-100"
          onChange={priceFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <label className="container">
        $100 - $200
        <input
          name="price"
          type="radio"
          value="100-200"
          id="100-200"
          onChange={priceFilterHandler}
        />
        <span className="checkmark" />
      </label>
      <label className="container">
        More than $200
        <input
          name="price"
          type="radio"
          value="M200"
          id="M200"
          onChange={priceFilterHandler}
        />
        <span className="checkmark" />
      </label>
    </FilterBox>
  );
};

export default Filtering;
