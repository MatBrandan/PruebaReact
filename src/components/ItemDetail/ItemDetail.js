import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"

const ItemDetail = ( {id, name, img, description, price, stock} ) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const {itemToAdd} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        itemToAdd(productToAdd)
    }


    return(
        <div>
            <h1>{name}</h1>
            <img src={img} className="col-2" alt={name}></img>
            <h2>{description}</h2>
            <h3 className="mb-5 col-3 d-inline-flex justify-content-center  " style={{backgroundColor:"#A90015", color:"#F2F5FA"}} >${price}</h3>

            <div>
                {
                    quantityToAdd === 0 ? (
                <ItemCount onConfirm= {handleOnAdd} stock={stock}/> )
                        : (
                            <Link to='/cart'>Finalizar Compra</Link>
                        )
                }
            </div>
        </div>
    )
}

export default ItemDetail