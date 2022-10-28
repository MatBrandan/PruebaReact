import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([])
    const [cartQuantity, setCartQuantity] = useState (0)
    const [totalPay, setTotalPay] = useState (0)
    console.log(cart);

    const itemToAdd = (productToAdd) => {
        if(!inCart (productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else{
            console.log('producto ya agregado');
        }
    }

    const inCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const calculatePay = () =>{
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        setTotalPay(total)
    }

    const itemRemove = (id) =>{
        const cartItemRemoved = cart.filter(prod => prod.id !== id)
        setCart(cartItemRemoved)
    }

    const cartClear = () =>{
        setCart([])
    }

    useEffect (() =>{
        const cartQuantity = getCartQuantity()
        setCartQuantity(cartQuantity)
        calculatePay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const getCartQuantity = () => {
        let cartQuantity = 0
        cart.forEach(prod => {
            cartQuantity += prod.quantity
    })
    return cartQuantity
    }

    return (
        <CartContext.Provider value= {{cart, itemToAdd, itemRemove, cartQuantity, totalPay, cartClear }}>
            {children}
        </CartContext.Provider>
    )
}