import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getProducts } from "../../asyncMock";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState ([])
const {categoryId} = useParams()

    useEffect(() => {
        getProducts(categoryId).then( response =>{
            setProducts(response)
        })
    }, [categoryId])
    
    return(
    <div>
        <h1>{greeting}</h1>        
        <ItemList products={products} />   
    </div>
    )
}

export default ItemListContainer