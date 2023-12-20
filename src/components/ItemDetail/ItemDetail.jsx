const ItemDetail= ({item}) => {
return (
    <article>
            <h2 className="text bg-black">{item.nombre}</h2>
            <p className="text bg-black">{item.marca}</p>
            <button className='boton'>Leer más</button>
    </article>
)
}

export default ItemDetail 