

import { useState } from "react";
import camera from "../../assets/camera.jpg";
import "./Card.css"
export default function Card() {
    const [liked, setLiked] = useState(false);

    function clickHandler(event) {
        event.preventDefault();
        setLiked(!liked)
        console.log("Clicked")
    }

    return (
        <>
            <div className="cardContainer">

                <div className="card" >

                    <div className="imageCard">
                        <img src={camera} alt="camera" />
                    </div>
                    <span className="productTitle">
                        Retro Camera
                    </span>
                    <span className = "productDescription">
                      
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