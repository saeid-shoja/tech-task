import React, { useState, useContext } from "react";
import { CartContext } from "App.js";
import {
  Head,
  PorchaseBox,
  CartCintainer,
  CloseBtn,
  Picture,
  CartContainer,
  LeftPart,
  Hr,
} from "./header.style";
import Icon from "assets/icons/Icon.png";
import Basket from "assets/icons/Basket.png";
import Close from "assets/icons/close.png";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const showCartsList = cart.map((ct, i) => {
    return (
      <div
        key={cart.length * Math.random()}
      >
        <CloseBtn
          src={Close}
          alt="close"
          onClick={() => setCart(cart.filter((c) => c !== ct))}
        />
        <CartContainer>
          <LeftPart>
            <p>{ct.name}</p>
            <p>$ {ct.price}.00</p>
          </LeftPart>
          <Picture src={ct.img.src} alt={ct.img.alt} />
        </CartContainer>
        <hr />
      </div>
    );
  });

  return (
    <>
      <Head>
        <img src={Icon} alt="Icon" />
        <CartCintainer>
          <img src={Basket} alt="Icon" onClick={() => setShowCart(!showCart)} />
          {cart.length > 0 && <p>{cart.length}</p>}
        </CartCintainer>
        {showCart && (
          <PorchaseBox>
            {showCartsList}
            <button onClick={() => setCart([])}>CLEAR</button>
          </PorchaseBox>
        )}
      </Head>
      <Hr />
    </>
  );
};

export default Header;
