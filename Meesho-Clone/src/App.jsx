import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import SingleProduct from "./components/SingleProduct";
import { useState } from "react";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    console.log(item);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar cartCount={selectedItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="single-product/:id"
            element={<SingleProduct onSelectItem={onSelectItem} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
