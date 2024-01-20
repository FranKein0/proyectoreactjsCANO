import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";


const CheckOut = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });
    console.log(values)

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            cliente: values,
            item: cart.map(item => ({
                cantidad: item.cantidad,
                nombre: item.nombre,
                id: item.id,
                precio: item.precio
            })),
            total: totalCart(),
            fecha: new Date()
        }

        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, order).then((doc) => {
            setOrderId(doc.id)
            clearCart()
        });
        
    }

    if (orderId) {
        return (<div className="container m-6">
            <h2 className="text-5xl text-black">Gracias por tu compra</h2>
            <hr />
            <p className="text-2xl text-black">Tu código de orden es: {orderId}</p>
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-11"><Link to={"/"}>Volver al inicio</Link></button>
        </div>
        )

    }


   return (
    <div className="m-auto mt-10">
        <h2 className="text-4xl font-semibold text-black">Ingresa tus datos</h2>
        <hr />

        <form className="flex flex-col gap-4 max-w-md mt-10 ml-10" onSubmit={handleSubmit}>
    <input 
        className="border p-2" 
        type="text" 
        placeholder="Nombre"
        onChange={handleInputChange}
        value={values.nombre} 
        name="nombre"
    />

    <input 
        className="border p-2" 
        type="text" 
        placeholder="Direccion"
        onChange={handleInputChange}
        value={values.direccion} 
        name="direccion"
    />
    
    <input 
        className="border p-2" 
        type="email" 
        placeholder="Email"
        onChange={handleInputChange}
        value={values.email} 
        name="email"
    />
    <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Enviar</button>
</form>

            
    </div>
  )
}

export default CheckOut