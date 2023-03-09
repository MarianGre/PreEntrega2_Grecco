import { useParams } from "react-router-dom";

 const ItemDetailContainer = ({productos}) => {
    const {id} = useParams();
    const producto = productos.find((producto) => producto.id == id);
    return (
        <div className= "container">
            <h3>{producto.title}</h3>
            <h4>{producto.category}</h4>
            <img className= "image" src={producto.image} alt="imagen del producto" width={200}/>
            <p>{producto.description}</p>
            <p>$ {producto.price}</p>
            <p>Rating: {producto.rating.rate}</p>
        </div>
    );
    };
    export default ItemDetailContainer;
    