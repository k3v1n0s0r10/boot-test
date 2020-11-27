import { Modal } from "./components/Modal";
import { ListOfImages } from "./components/ListOfImages";

import { ImgArrayContext } from "./context/context";

import "./App.css";
import { useState } from "react";

function App() {
  const [imgArray, setImgArray] = useState(null);

  return (
    <div className="App">
      <ImgArrayContext.Provider value={{ imgArray, setImgArray }}>
        {imgArray ? <ListOfImages /> : <Modal />}
      </ImgArrayContext.Provider>
    </div>
  );
}

export default App;

//oprimo boton escondo modal muestra imagenes
