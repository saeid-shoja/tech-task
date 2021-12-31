import React, { useState, useContext } from "react";
import Sorting from "assets/icons/sorting.png";
import {
  AlbumPart,
  ProductList,
  ProductContainer,
  Category,
  Product,
  Cover,
  Head,
  Right,
  Left,
} from "./Album.style";
import data from "constant/data/data.json";
import AddToCartButton from "components/addToCart/AddToCartButton";
import ReactPaginate from "react-paginate";
import Filtering from "components/filtering/Filtering";
import "./paginationStyle.css";
import { CartContext } from "App.js";

const Album = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [pageNumber, setPageNumber] = useState(0);
  const [sort, setSort] = useState("");
  const [categoryFiltering, setCategoryFiltering] = useState([]);
  const [priceFiltering, setPriceFiltering] = useState("");

  const getFilteredItems = () => {
    let sortedItems = data;
    switch (sort) {
      case "Alphabetically":
        sortedItems = data.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        );
        break;
      case "Reverse Alphabetically":
        sortedItems = data.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
        );
        break;
      case "Lower Price":
        sortedItems = data.sort((a, b) => (a.price < b.price ? -1 : 1));
        break;
      case "Higher Price":
        sortedItems = data.sort((a, b) => (a.price > b.price ? -1 : 1));
        break;

      default:
        sortedItems = data;
        break;
    }

    let categoryFilteredItems = sortedItems;
    if (categoryFiltering.length !== 0) {
      categoryFilteredItems = sortedItems.filter((item) =>
        categoryFiltering.includes(item.category)
      );
    }

    let priceFilteredItems = categoryFilteredItems;
    switch (priceFiltering) {
      case "L20":
        priceFilteredItems = categoryFilteredItems.filter(
          (item) => item.price <= 20
        );
        break;
      case "20-100":
        priceFilteredItems = categoryFilteredItems.filter(
          (item) => 20 < item.price && item.price < 100
        );
        break;
      case "100-200":
        priceFilteredItems = categoryFilteredItems.filter(
          (item) => 100 < item.price && item.price < 200
        );
        break;
      case "M200":
        priceFilteredItems = categoryFilteredItems.filter(
          (item) => item.price > 200
        );
        break;
      default:
        priceFilteredItems = categoryFilteredItems;
        break;
    }
    return priceFilteredItems;
  };

  const { setCart, cart, setCartDetailes } =
    useContext(CartContext);
  const addToCartHandler = (i) => {
    const newCartDetailes = {
      price: i.price,
      img: i.image,
      name: i.name,
    };
    setCartDetailes(newCartDetailes);
    setCart([newCartDetailes, ...cart]);
  };

  const itemPerPage = 6;
  const visitedPage = pageNumber * itemPerPage;
  const filteredItems = getFilteredItems();
  const displayItems = filteredItems
    .slice(visitedPage, visitedPage + itemPerPage)
    .map((product, i) => {
      return (
        <Product key={product.id}>
          <Cover
            key={product.id}
            bestsell={product.bestseller}
            onMouseEnter={() => {
              setHoveredIndex(i);
            }}
            onMouseLeave={() => {
              setHoveredIndex(-1);
            }}
            isHovered={hoveredIndex === i}
          >
            <p>{product.bestseller ? "Best Seller" : null}</p>
            <img src={product.image.src} alt={product.image.alt} />
            <AddToCartButton onAdd={() => addToCartHandler(product)} />
          </Cover>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </Product>
      );
    });

  const pageCount = Math.ceil(filteredItems.length / itemPerPage);
  const changingPage = ({ selected }) => {
    setPageNumber(selected);
  };

  const sortingHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <AlbumPart>
      <Head>
        <Left>
          <p>Photography /</p> <p>Premium Photos</p>
        </Left>
        <Right>
          <img src={Sorting} alt="sorting" />
          <p>Sort By</p>
          <select onChange={sortingHandler}>
            <option>Default</option>
            <option>Lower Price</option>
            <option>Higher Price</option>
            <option>Alphabetically</option>
            <option>Reverse Alphabetically</option>
          </select>
        </Right>
      </Head>
      <Category>
        <Filtering
          categoryFiltering={categoryFiltering}
          setCategoryFiltering={setCategoryFiltering}
          priceFiltering={priceFiltering}
          setPriceFiltering={setPriceFiltering}
        />
        <ProductContainer>
          <ProductList>{displayItems}</ProductList>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changingPage}
            containerClassName="containerStyle"
            nextClassName="nextBtnStyle"
            previousClassName="previousBtnStyle"
            disabledClassName="disableStyle"
            activeClassName="activePageStyle"
          />
        </ProductContainer>
      </Category>
    </AlbumPart>
  );
};

export default Album;
