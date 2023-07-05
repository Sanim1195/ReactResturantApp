import React, { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import CartContext from '../../Store/cart-context';

//The cart function maps over the items array that holds all the items added to cart. 

export default function Cart() {

    const cartCtx = useContext(CartContext);

    const totalPrice = () =>{
        return cartCtx.totalAmount;
    }
    

    return (
        <div className='cartItemContainer'>
            <div className='eachItemOnCart'>
                {
                    cartCtx.items.map((cartItems) => {
                        return (
                            <CartItem cartItems={cartItems} />
                        )
                    })
                }
            </div>
            <div className='bottomContainer'>
                <span>Total</span>
                <span> { `$ ` + totalPrice().toFixed(2)}</span>
            </div>
        </div>
    )
}
