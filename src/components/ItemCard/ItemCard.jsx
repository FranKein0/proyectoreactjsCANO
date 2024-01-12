import { Link } from 'react-router-dom';

const ItemCard= ({item}) => {
    console.log (item)
    return (  
        <div className="card hover:scale-110 shadow-lg relative overflow-hidden bg-cover bg-no-repeat max-w-xs transition duration-300 ease-in-out">
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <Link to={`/item/${item.id}`} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 absolute bottom-3 right-3 m-4 p-2'>Leer más</Link>
        </div>    
    )
}

export default ItemCard