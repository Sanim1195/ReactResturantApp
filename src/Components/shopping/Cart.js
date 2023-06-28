import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

export default function Cart(props) {
    const totalPrice = () =>{
        var price = 0;
    props.showCartItems.forEach(items => {
            price += items.price;  
    });
    return price
    }
    

    return (
        <div className='cartItemContainer'>
            <div className='eachItemOnCart'>
                {
                    props.showCartItems.map((cartItems) => {
                        return (
                            <CartItem cartItems={cartItems} />
                            // <h1>
                            //    { items.productName}
                            // </h1>
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
