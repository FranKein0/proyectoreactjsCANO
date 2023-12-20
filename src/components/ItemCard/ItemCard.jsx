import { Link } from 'react-router-dom';

const ItemCard= ({item}) => {
    console.log (item)
    return (  
        <div className="card">
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <Link to={`/item/${item.id}`} className='boton'>Leer más</Link>
        </div>    
    )
}

export default ItemCard