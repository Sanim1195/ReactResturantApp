import { useState, useEffect } from "react";
import camera from "../../assets/camera.jpg";
import "./Card.css"


export default function Card(props) {
    const [liked, setLiked] = useState(false);
    const [addedToWatchlist, setAddedToWatchlist] = useState(false);
    const [watchlistVisible, setWatchlistVisible] = useState(false);

    function clickHandler(event) {
        event.preventDefault();
        setLiked(!liked);
        // console.log(liked)
        setAddedToWatchlist(!addedToWatchlist)
        setWatchlistVisible(!watchlistVisible)
        setTimeout(() => {
            // var watchlist = document.getElementById("watchlist");
            // watchlist.style.display = 'none';
            setWatchlistVisible(false)
        }, 1000);

    }
    useEffect(() => {
        console.log("liked:", liked);
        console.log("added To watchlist: ", addedToWatchlist)


    }, [liked, addedToWatchlist]);
    return (
        <>
            <div className="cardContainer">

                <div className="card" >
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
                        Retro Camera
                    </span>
                    <span className="productDescription">

                        Product description
                        Product description  Product description  Product description  Product description
                        Product description
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
                        <div className="cart">
                            🛒
                        </div>
                    </div>
                </div>

            </div >
        </>
    )


}