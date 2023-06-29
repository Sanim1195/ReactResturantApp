import React from "react";

// creating context
const CartContext = React.createContext({
    items : [],
    totalAmount: 0,
    // function that wil help us to add and remove items in the cart
    addItem : (item) => {},
    removeItem : (id) =>{}
});

export default CartContext;