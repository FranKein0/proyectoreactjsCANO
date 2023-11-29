import './ItemListConteiner.scss'

const ItemListConteiner= ({greeting}) => {
    return (
        <section>
            <h1>Productos</h1>
            <p>{greeting}</p>
        </section>
    )
}

export default ItemListConteiner