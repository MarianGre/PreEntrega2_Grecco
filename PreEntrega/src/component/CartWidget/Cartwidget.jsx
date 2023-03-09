import {AiOutlineShoppingCart } from 'react-icons/ai';
import './cartwidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <AiOutlineShoppingCart className="cart-icon" />
      <span className="cart-notificacion">0</span>
    </div>
  );
};
export default CartWidget;

