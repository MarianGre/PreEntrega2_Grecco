
import Cards from "../Cards/Cards";

const ItemList = ( {productos}) => {
  return (
    <div className="container_Button">
      {productos.map((producto) => (
        <Cards key={producto.id} producto={producto}/>
      ))}
    </div>
  );
};

export default ItemList;
