import { Link } from "react-router-dom"

const EmtpyCart = () => {

    return (
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-semibold text-black mt-11">Tu carrito está vacío</h2>
        <hr />
        <p className="text-2xl font-semibold text-black">Agrega algún producto a tu carrito</p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gradient-to-br mt-6">
          <Link to={"/"}>Volver</Link>
        </button>
      </section>
    )
}

export default EmtpyCart