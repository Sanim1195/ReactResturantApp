import React from 'react'
import { useState, useEffect } from "react";
import camera from "../../assets/camera.jpg";
import "./Card.css"


// the liked state changes the color of the heart icon
// the added to watchlist displays the message on top of the item
// the watchlistVisible removes the message div after coupke of second
export default function CardItem(props) {
    const [liked, setLiked] = useState(false);
    const [addedToWatchlist, setAddedToWatchlist] = useState(false);
    const [watchlistVisible, setWatchlistVisible] = useState(false);


    // function for heart icons
    function watchListHandler(event) {
        event.preventDefault();
        // set liked to either red or white heart
        console.log("The product you have added to your watchlist is: ", props.product)

        setLiked(!liked);

        setAddedToWatchlist(!addedToWatchlist)
        setWatchlistVisible(!watchlistVisible)
        // displaying the information only for a second before it disappears
        setTimeout(() => {
            setWatchlistVisible(false)
        }, 1000);

    }


    function addToCart() {
        props.addToCartHandler(props.product);
        console.log("You have added the following item to your cart: ", props.product)

    }
    return (
        <div className="card" key={props.product.id}>
            {
                addedToWatchlist && watchlistVisible && <div id="watchlist" className="watchListInfo">
                    ❕Item added to watchlist
                </div>
            }
            {
                !addedToWatchlist && watchlistVisible && <div className="watchListInfo">
                    ❕Item removed from watchlist
                </div>
            }
            {/* Div that holds the image  */}
            <div className="imageCard">
                <img src={camera} alt="camera" />
            </div>

            {/* product description */}
            <span className="productTitle">
                {props.product.productName}
            </span>
            <span className="productDescription">

                {props.product.description}
            </span>
            <span>
                🔽
            </span>
            
            {/* div that holds the heart and cart */}
            <div className="bottomCard">
                <div className="heart" onClick={watchListHandler}>
                    {liked ? <span>
                        ❤️
                    </span> : <span>
                        🤍
                    </span>}
                </div>
                <div className="cart" onClick={addToCart} >
                    🛒
                </div>
            </div>
        </div>


    )
}


