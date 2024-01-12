import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../utilities/util"


const useProductos = () => {
    const [productos, setProductos] = useState([])
    const {category}  = useParams()

    useEffect(() => {
        pedirDatos(category)
            .then((data) => {
                const items = category 
                                ? data.filter(prod => prod.category === category.toUpperCase())
                                : data
                setProductos(items)
            })
    }, [category])

    return {productos}
}

export default useProductos