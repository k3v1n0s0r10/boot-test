import React, { useContext } from "react";
import { ImgArrayContext } from "../../context/context";
import { ModalContainer, Content } from "./styles";

export const Modal = () => {
  const { setImgArray } = useContext(ImgArrayContext);

  const apiUrl = "https://rickandmortyapi.com/api/character/";

  const handleButtonClick = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImgArray(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ModalContainer>
      <Content>Imagenes Rick & Morty</Content>
      <button onClick={handleButtonClick}>Ver Imagenes</button>
    </ModalContainer>
  );
};
