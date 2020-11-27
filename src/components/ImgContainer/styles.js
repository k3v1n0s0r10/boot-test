import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 200px;
  height: 200px;
  margin: 2rem 2rem;
  border-radius: 1rem;
  transition: all 0.3s;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: translateY(-10px);
    -webkit-box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover; //Para que la imagen se ajuste
  position: absolute;
  top: 0;
  width: 100%;
`;
