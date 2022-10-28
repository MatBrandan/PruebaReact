import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        
        <div className="row justify-content-around align-middle">
        {products.map( product =>  (
            <Item key={product.id} {...product} />
            ) 
            )}
        </div>
        
    )
}

export default ItemList