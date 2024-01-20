import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import EmtpyCart from "./EmptyCart";


const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

    if (cart.length === 0) return <EmtpyCart />

    return (
        <section className="container m-auto mt-8">
          <h2 className="text-4xl font-semibold text-black">Tu Compra</h2>
          <hr />
    
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex gap-3 border-b my-4">
                <img src={item.imagen} alt="Cart img" className="w-96 hover:scale-110 shadow-lg relative overflow-hidden bg-cover bg-no-repeat max-w-xs transition duration-300 ease-in-out" />
                <div>
                  <h3 className="text-2xl">{item.nombre}</h3>
                  <p className="text-2xl font-bold text-black">
                    $ {item.precio * item.cantidad}
                  </p>
                  <p className="text-black">Cantidad: {item.cantidad}</p>
                </div>
              </li>
            ))}
          </ul>
    
          <h4 className="text-4xl font-semibold mb-7">TOTAL: ${totalCart()}</h4>
          <Link to="/checkout"><button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Finalizar compra</button></Link>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gradient-to-br" onClick={clearCart}>Vaciar carrito</button>
        </section>
      );
    };
  
    export default CartView;