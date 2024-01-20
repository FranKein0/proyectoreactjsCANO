import './ItemListConteiner.scss';
import ItemList from '../ItemList/ItemList';
// import useProductos from '../../hooks/useProductos';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {const [productos, setProductos] = useState([])


    const { categoryId } = useParams()


    useEffect(() => {
        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef

        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })


                setProductos(docs)
            })
    }, [categoryId])

    return (
        <div>
            <h2 className='titulo'>Productos</h2>
            <hr />
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListConteiner;

