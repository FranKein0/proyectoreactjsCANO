import {  useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext (CartContext)

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    }

    addToCart(itemToCart)
  }

  const handleVolver = () => {
    navigate(-1)
  }

  return (
    <div className="container m-auto mt-8">
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gradient-to-br" onClick={handleVolver}>Volver</button>
      <h3 className="mt-4 text-2xl font-semibold ">{item.nombre}</h3>
      <hr />


      <div className="flex gap-8 pt-4 mt-20">
        <img className="w-96 hover:scale-110 shadow-lg relative overflow-hidden bg-cover bg-no-repeat max-w-xs transition duration-300 ease-in-out" src={item.imagen} alt={item.nombre} />

        <div>
          <p className="text-black text-lg mt-5">{item.descripcion}</p>
          <p className="text-xl font-bold text-black ml-2">Precio: ${item.precio}</p>


          {
            isInCart( item.id )
              ? <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to="/cart">Terminar mi compra</Link></button>
              : <>
                  <QuantitySelector 
                    cantidad={cantidad}
                    stock={item.stock}
                    setCantidad={ setCantidad }
                  />          
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5" onClick={handleAgregar} disabled={item.stock === 0}>Agregar al carrito</button>
                </>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;