import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: #000000;
  }
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  width: 55%;

  & p:nth-child(1) {
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: #656565;
    margin-bottom: 12px;
  }

  & p:nth-child(2) {
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #656565;
  }
`;

export const AlsoBuy = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: end;

  & img {
    width: 117px;
    height: 147px;
  }

  & div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 54px;
  }

  & p {
    font-weight: normal;
    font-size: 16px;
    line-height: 17px;
    text-align: right;
    color: #656565;
    margin-bottom: 10px;
  }

  & p:nth-child(1) {
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 10px;
  }
`;
