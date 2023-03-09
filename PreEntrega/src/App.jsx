import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./component/ItemList/ItemList";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Bienvenides a Mi tienda</h1>
      <Routes>
        <Route path="/" element={<Home />} 
        />
        <Route
          path="/productos" element={<ItemList productos={productos} />}
        />
        <Route path="/productos/:id" element={<ItemDetailContainer productos={productos}/>}
        />
         <Route path="/category/*" element={<ItemListContainer productos={productos}/>}
        />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </div>
  );
}

export default App;
