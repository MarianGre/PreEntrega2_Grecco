import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

const ItemListContainer = ({productos}) => {
   const {category} = useParams();
   const filteredProductos = productos.filter((producto) => 
     producto.category === 'jewelery' || 
     producto.category === "men's clothing" || 
     producto.category === 'electronics'
   );
   
    return (
      <div className="container_Button">
      {filteredProductos.map((producto) => (
        <Cards key={producto.id} producto={producto}/>
      ))}
    </div>
    );
    };
    export default ItemListContainer;
    