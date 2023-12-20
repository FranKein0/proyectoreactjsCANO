import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {
    return (
        <section className="list-conteiner">
            <div className="cards">
              {productos.map((item)=><ItemCard key={item.id} item={item}/>)}  
            </div>
        </section>
    )
}

export default ItemList