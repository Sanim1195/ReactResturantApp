import React from 'react'

export default function cartItem (props) {
    return (
        <div className="cartItem">
            <div>
                <img src='' alt={props.productName} />

            </div>
            <div>
                <span>
                    Quantity
                </span>
                <span>
                    {props.cartItems.productName}
                </span>
                <span>
                    {props.cartItems.price}
                </span>
            </div>

        </div>
    )
}
