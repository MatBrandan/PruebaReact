import cart from './assets/cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div className='me-lg-5 me-sm-1'>
            <Link to={'/cart'}>
                <button className='btn btn-secondary'><img src={cart} style={{height:35}} alt='cart'/> {cartQuantity} </button>
            </Link>
        </div>
    )
}

export default CartWidget