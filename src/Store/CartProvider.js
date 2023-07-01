import { useReducer } from 'react'
import React from 'react'
import CartContext from './cart-context'

// initial cart state empty list
const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

    // grouping same items together and updating the total price of cart
    // items[] inside the defaultCartState.

    //  Action.item holds the actual state list while state.items is the temporary array where       we will store our ist af cart items 
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items:updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};



// This component manages the cart context data nd provide that data to all componenets that want access to it 
export default function CartProvider(props) {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });

  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );


}
