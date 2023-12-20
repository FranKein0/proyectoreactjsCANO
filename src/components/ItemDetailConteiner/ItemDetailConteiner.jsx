import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../utilities/util";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConteiner= () => {
const [item, setItem] = useState(null);

const { itemId } = useParams()

useEffect (() => {
    pedirDatos()
        .then((data) => {
            setItem( data.find((prod) => prod.id === Number(itemId)))
        })
}, []);
return (
    <>
        {item &&<ItemDetail item={item}/>}
    </>
)
}

export default ItemDetailConteiner