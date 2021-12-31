import styled from "styled-components";

export const Head = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  align-items: center;
`;

export const CartCintainer = styled.div`
  position: relative;

  p:nth-child(2) {
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.07em;
    color: #ffffff;
    padding: 1px 4px 1px 7px;
    position: absolute;
    right: -5px;
    bottom: -15px;
    background-color: #000;
  }
  & img {
    cursor: pointer;
  }
`;

export const CartContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 9px;
  }

  & p:nth-child(2) {
    font-weight: normal;
    font-size: 29px;
    line-height: 32px;
    color: #656565;
  }
`;

export const Picture = styled.img`
  width: 150px;
  height: 86px;
`;

export const CloseBtn = styled.img`
  position: absolute;
  right: 25px;
  width: 18px;
  height: 18px;
  margin-right: 20px;
  cursor: pointer;
`;

export const PorchaseBox = styled.div`
  background-color: #fff;
  position: absolute;
  margin: 0;
  right: 0;
  top: 93px;
  width: 443px;
  padding: 22px 25px;
  border: 4px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: right;
  height: max-content;
  z-index: +10;

  & hr {
    border: 1px solid #c2c2c2;
    margin-bottom: 25px;
  }

  & button {
    width: 100%;
    height: 55px;
    background: #ffffff;
    border: 3px solid #000000;
    font-weight: 500;
    font-size: 23px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.07em;
    color: #000000;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  height: 4px;
  background-color: #e4e4e4;
  margin-top: 36px;
  margin-bottom: 58px;
`;
