    import React from 'react'
    import { useState, useEffect } from "react";
    import camera from "../../assets/camera.jpg";
    import "./Card.css"
    import Modal from './Modal';


    // the liked state changes the color of the heart icon
    // the added to watchlist displays the message on top of the item
    // the watchlistVisible removes the message div after coupke of second
    export default function CardItem(props) {
        const [liked, setLiked] = useState(false);
        const [addedToWatchlist, setAddedToWatchlist] = useState(false);
        const [watchlistVisible, setWatchlistVisible] = useState(false);
        const [isAddedTocart, setIsAddedToCart] = useState(false);
        const [isAddedToCartVisible, setIsAddedToCartVisible] = useState(false);
        const [showModal, setShowModal] = useState(false);


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
            setIsAddedToCart(true);
            setIsAddedToCartVisible(true);
            console.log("You have added the following item to your cart: ", props.product)
            setTimeout(() => {
                setIsAddedToCartVisible(false)
            }, 1000);

        }

        const showModalHandler = (event) => {
            console.log("Clicked on the card");
            console.log(event.target.className)
            var class_name = event.target.className;
            if(class_name === 'backdrop' || class_name === 'card'){
                setShowModal( prevState => !prevState);
            }
        }
        return (
            <div className="card" key={props.product.id} onClick={showModalHandler}
                > 

                    {showModal && <Modal/>}
                {
                    addedToWatchlist && watchlistVisible && <div className="watchListInfo">
                        ❕Item added to watchlist
                    </div>
                }
                {
                    !addedToWatchlist && watchlistVisible && <div className="watchListInfo">
                        ❕Item removed from watchlist
                    </div>
                }
                {
                    isAddedTocart && isAddedToCartVisible && <div className="watchListInfo">
                        ❕Item added to cart
                    </div>
                }
                {/* Div that holds the image  */}
                <div className="imageCard" >
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






/*

import React, { useState, useEffect } from 'react';
import camera from '../../assets/camera.jpg';
import './Card.css';
import Modal from './Modal';

export default function CardItem(props) {
  const [liked, setLiked] = useState(false);
  const [status, setStatus] = useState(null);
  const [isAddedToCartVisible, setIsAddedToCartVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Hide the cart message after a certain duration
    if (isAddedToCartVisible) {
      const timeout = setTimeout(() => {
        setIsAddedToCartVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isAddedToCartVisible]);

  const watchListHandler = (event) => {
    event.preventDefault();
    // Toggle liked state and update status
    setLiked((prevState) => !prevState);
    setStatus(!liked ? 'addedToWatchlist' : 'removedFromWatchlist');
    // Clear status after a certain duration
    setTimeout(() => {
      setStatus(null);
    }, 1000);
  };

  const addToCart = () => {
    props.addToCartHandler(props.product);
    setIsAddedToCartVisible(true);
    // Clear cart message after a certain duration
    setTimeout(() => {
      setIsAddedToCartVisible(false);
    }, 1000);
  };

  const showModalHandler = () => {
    console.log('Clicked on the card');
    setShowModal(true);
  };

  return (
    <div className="card" key={props.product.id} onClick={showModalHandler}>
      {showModal && <Modal />}
      {status && (
        <div className="watchListInfo">
          {status === 'addedToWatchlist' ? '❕Item added to watchlist' : '❕Item removed from watchlist'}
        </div>
      )}
      {isAddedToCartVisible && (
        <div className="watchListInfo">
          ❕Item added to cart
        </div>
      )}
      <div className="imageCard">
        <img src={camera} alt="camera" />
      </div>
      <span className="productTitle">
        {props.product.productName}
      </span>
      <span className="productDescription">
        {props.product.description}
      </span>
      <span>🔽</span>
      <div className="bottomCard">
        <div className="heart" onClick={watchListHandler}>
          {liked ? <span>❤️</span> : <span>🤍</span>}
        </div>
        <div className="cart" onClick={addToCart}>
          🛒
        </div>
      </div>
    </div>
  );
}

*/


/*
In the updated code, the changes include:

Consolidated the addedToWatchlist, watchlistVisible, and isAddedToCart states into a single status state to represent the item status.
Added an isAddedToCartVisible state to control the visibility of the cart message.
Utilized the useEffect hook to automatically hide the cart message after a certain duration.
Refactored the watchListHandler function to toggle the liked state and update the status accordingly.
Updated the conditional rendering logic to display the appropriate status messages based on the status state.
Simplified the code by removing unnecessary variables and combining similar logic.

*/
