import React from "react";
import { ImgWrapper, Img } from "./styles";

export const ImgContainer = ({ imgUrl }) => {
  return (
    <ImgWrapper>
      <Img src={imgUrl} />
    </ImgWrapper>
  );
};
