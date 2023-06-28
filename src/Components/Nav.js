import { useState } from "react";
import "./Nav.css";
import Cart from "./shopping/Cart";

// @Todo

function Nav(props) {
    const [isCartListVisible, setIsCartListVisible] = useState(false)

    // Controls the visibility of the div that hold the cart items 😁
    function cartListVisibleHandler(){
        console.log("cart Clicked !!");
        setIsCartListVisible(!isCartListVisible);
    }

    return (
        <div className="navContainer">
            <ul className="navUl">
                <li className="navLi1">
                    Logo
                </li>
                <li>
                    categories
                </li>
                <li>
                    shop
                </li>
                <li className="cartIcon" onClick={cartListVisibleHandler}>
                    <span>
                    🛒 {props.numberOfCartItems}

                    </span>
                </li>
            </ul>

            {
                isCartListVisible && <Cart showCartItems={props.showCartItems}/>
            }
        </div>
    )
}


export default Nav;


// @TODO
//  Change the onhover effect from li to indivdual span items