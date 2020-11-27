import React, { useContext } from "react";
import { ImgArrayContext } from "../../context/context";
import { ImgContainer } from "../ImgContainer";

import "./main.css";

export const ListOfImages = () => {
  const { imgArray, setImgArray } = useContext(ImgArrayContext);

  return (
    <div className="img-container">
      {imgArray.map((img) => (
        <ImgContainer key={img.id} imgUrl={img.image} />
      ))}
      <button onClick={() => setImgArray(null)}>Atras</button>
    </div>
  );
};
