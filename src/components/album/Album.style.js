import styled from "styled-components";

export const AlbumPart = styled.div``;
export const Category = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  column-gap: 50px;
  width: 100%;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductList = styled.div`
  height: 1100px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 48px 56px;
  grid-auto-flow: row;
  justify-content: left;
  align-content: center;
  align-items: center;
  grid-template-areas:
    ". . ."
    ". . .";
  margin-bottom: 107px;
  width: 100%;
  margin-left: 50px;
`;

export const Product = styled.div`
  & p:nth-child(2) {
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: #656565;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  & p:nth-child(3) {
    font-weight: bold;
    font-size: 34px;
    line-height: 37px;
    color: #000000;
    margin-bottom: 9px;
  }

  & p:nth-child(4) {
    font-weight: normal;
    font-size: 29px;
    line-height: 32px;
    color: #656565;
  }
`;

export const Cover = styled.div`
  position: relative;
  width: 257px;
  height: 390px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }

  & button {
    position: absolute;
    bottom: 0;
    left: 0;
    display: ${(props) => (props.isHovered ? "block" : "none")};
  }

  & p {
    padding: ${(props) => (props.bestsell ? "7px 20px" : 0)};
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 63px;
`;

export const Left = styled.div`
  display: flex;

  & p:nth-child(1) {
    font-weight: bold;
    font-size: 30px;
    line-height: 33px;
    color: #000000;
    margin-right: 5px;
  }

  & p:nth-child(2) {
    font-weight: normal;
    font-size: 30px;
    line-height: 33px;
    color: #9b9b9b;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 15px;
    height: 25.5px;
    margin-right: 7px;
  }

  & p {
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    color: #9b9b9b;
    margin-right: 10px;
  }

  & select {
    width: max-content;
    border: none;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    color: #000000;
    margin-left: 15px;
    cursor: pointer;
  }
`;
