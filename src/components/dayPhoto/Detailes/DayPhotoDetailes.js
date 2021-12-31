import React from "react";
import data from "constant/data/data.json";
import { Title, Detail, Description, AlsoBuy } from "./DayPhotoDetailes.style";
import {Hr} from "components/header/header.style"

const DayPhotoDetailes = ({ coverTitle }) => {
  let coverCategories = null;
  let coverDescription = null;
  let recommendationsImg = null;
  let sizePic = null;
  let dimmentions = null;

  data.map((product) => {
    if (product.featured) {
      coverCategories = product.category;
      coverDescription = product.details.description;
      recommendationsImg = (
        <div>
          <img
            src={product.details.recommendations[0].src}
            alt={product.details.recommendations[0].alt}
          />
          <img
            src={product.details.recommendations[1].src}
            alt={product.details.recommendations[1].alt}
          />
          <img
            src={product.details.recommendations[2].src}
            alt={product.details.recommendations[2].alt}
          />
        </div>
      );
      dimmentions = [
        product.details.dimmentions.width,
        product.details.dimmentions.height,
      ];
      sizePic = product.details.size / 1000;
    }
  });

  return (
    <div>
      <Title>
        <p>About {coverTitle}</p>
        <p>People also buy</p>
      </Title>
      <Detail>
        <Description>
          <p>{coverCategories}</p>
          <p>{coverDescription}</p>
        </Description>
        <AlsoBuy>
          {recommendationsImg}
          <div>
            <p>Detailes</p>
            <p>
              size: {dimmentions[0]} * {dimmentions[1]} pixel
            </p>
            <p>{sizePic} mb</p>
          </div>
        </AlsoBuy>
      </Detail>
      <Hr/>
    </div>
  );
};

export default DayPhotoDetailes;
