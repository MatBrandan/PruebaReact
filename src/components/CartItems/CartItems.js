import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItems = ({id, name, quantity, price}) =>{
    const {cart} = useContext(CartContext)
    console.log(cart);
    return(
        <div>
            {cart.map(item => (
                <h1 key={item.id} {...item}> {name} </h1>
            ))}
        </div>
    )
}
    

export default CartItems