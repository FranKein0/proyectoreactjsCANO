import './ItemListConteiner.scss'
import ItemList from '../ItemList/ItemList'
import useProductos from '../../hooks/useProductos'

const ItemListConteiner= () => {
    const {productos} = useProductos()
        return (
            <div>
                <h2 className='titulo'>Productos</h2>
                <hr />
                <ItemList productos={productos}/>
            </div>
    )
}

export default ItemListConteiner