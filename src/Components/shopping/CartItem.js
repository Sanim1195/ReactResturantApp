import React from 'react'

export default function cartItem (props) {
    return (
        <div className="cartItem">
            <div>
                <img src='' alt={props.productName} />

            </div>
            <div>
                <span>
                    {props.cartItems.quantity} x 
                </span>
                <span>
                    {props.cartItems.name}
                </span>
                <span>
                    {props.cartItems.price}
                </span>
            </div>

        </div>
    )
}
