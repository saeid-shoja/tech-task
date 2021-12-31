import styled from "styled-components";

export const PhotoPart = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  & p {
    font-weight: bold;
    font-size: 32px;
    line-height: 35px;
    color: #000000;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 550px;
  margin: 27px 0 45px 0;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
  }

  & p {
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
    padding: 22px 56px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
