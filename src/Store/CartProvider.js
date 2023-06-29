import React from 'react'
import CartContext from './cart-context'

// This component manages the cart context data nd provide that data to all componenets that want access to it 
export default function CartProvider(props) {

    const addItemToCartHandler = (item) => {

    }
    const removeItemFromCartHandler =(id) =>{

    }
    const cartContext = {
        items : [],
        total: 0,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromCartHandler,
    }
  return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
  )


}
