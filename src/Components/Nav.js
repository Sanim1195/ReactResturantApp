
import { useState } from "react";
import "./Nav.css";
import CartItem from "./shopping/CartItem";

function Nav(props) {
    const [isCartListVisible, setIsCartListVisible] = useState(false);
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
                {/* <li className="cartIcon" onClick={setIsCartListVisible(!isCartListVisible)}> */}
                <li className="cartIcon" >
                    🛒 {props.numberOfCartItems}
                    {/* {
                        isCartListVisible && <CartItem/>
                    } */}
                </li>
            </ul>

        </div>
    )
}


export default Nav;