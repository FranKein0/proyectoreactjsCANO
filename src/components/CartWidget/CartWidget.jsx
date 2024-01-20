import cartIcon from "../../assets/carticon.svg"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const itemsInCart = cart.reduce((total, item) => total + item.cantidad, 0);

    return (
        <Link to="/cart" className={`flex items-center gap-1 cursor-pointer`}>
            <img src={cartIcon} alt='Cart icon' className='w-15'/>
            <span className='text-white text-2xl'>{itemsInCart}</span>
        </Link>
    );
}

export default CartWidget