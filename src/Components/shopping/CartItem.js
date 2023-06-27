import React from 'react'
import { useState, useEffect } from "react";
import camera from "../../assets/camera.jpg";
import "./Card.css"


// the liked state changes the color of the heart icon
// the added to watchlist displays the message on top of the item
// the watchlistVisible removes the message div after coupke of second
export default function CartItem(props) {
    const [liked, setLiked] = useState(false);
    const [addedToWatchlist, setAddedToWatchlist] = useState(false);
    const [watchlistVisible, setWatchlistVisible] = useState(false);


    function clickHandler(event) {
        event.preventDefault();
        setLiked(!liked);
         console.log(props.product)

        setAddedToWatchlist(!addedToWatchlist)
        setWatchlistVisible(!watchlistVisible)
        // displaying the information only for a second before it disappears
        setTimeout(() => {
            // var watchlist = document.getElementById("watchlist");
            // watchlist.style.display = 'none';
            setWatchlistVisible(false)
        }, 1000);

    }
    useEffect(() => {
        liked && console.log(props.product.productName)
         console.log("liked:", liked);
        console.log("added To watchlist: ", addedToWatchlist)


    }, [liked, addedToWatchlist]);
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

            <div className="imageCard">
                <img src={camera} alt="camera" />
            </div>
            <span className="productTitle">
                {props.product.productName}
            </span>
            <span className="productDescription">

                {props.product.description}
            </span>
            <span>
                🔽
            </span>
            <div className="bottomCard">
                <div className="heart" onClick={clickHandler}>
                    {liked ? <span>
                        ❤️
                    </span> : <span>
                        🤍
                    </span>}
                </div>
                <div className="cart" >
                    🛒
                </div>
            </div>
        </div>


    )
}


