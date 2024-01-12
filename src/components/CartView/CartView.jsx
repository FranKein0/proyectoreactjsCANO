import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import EmtpyCart from "./EmtpyCart";

const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

    if (cart.length === 0) return <EmtpyCart />

    return (
        <section className="container m-auto mt-8">
          <h2 className="text-4xl font-semibold">Tu Compra</h2>
          <hr />
    
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex gap-3 border-b my-4">
                <img src={item.imagen} alt="Cart img" className="w-32" />
                <div>
                  <h3 className="text-2xl">{item.nombre}</h3>
                  <p className="text-2xl font-bold">
                    $ {item.precio * item.cantidad}
                  </p>
                  <p>Cantidad: {item.cantidad}</p>
                </div>
              </li>
            ))}
          </ul>
    
          <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
          <button onClick={clearCart}>Vaciar carrito</button>
        </section>
      );
    };
    
    export default CartView;