import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner= () => {
const [item, setItem] = useState(null);

const { itemId } = useParams()

useEffect(() => {
    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
        .then((snapshot) => {
            const data = {
                ...snapshot.data(),
                id: snapshot.id
            };
            setItem(data);
        })
}, []);



return (
    <>
        {item &&<ItemDetail item={item}/>}
    </>
)
}

export default ItemDetailConteiner