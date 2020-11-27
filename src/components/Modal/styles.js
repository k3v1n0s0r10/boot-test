import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 300px;
  width: 400px;
  border-radius: 10%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  & button {
    background-color: green;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: none;
    color: white;
    outline: none;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  text-transform: capitalize;
  font-size: 1.6rem;
`;
