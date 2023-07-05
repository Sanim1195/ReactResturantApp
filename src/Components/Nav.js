import { useState, useContext } from "react";
import "./Nav.css";
import Cart from "./shopping/Cart";
import CartContext from "../Store/cart-context";


function Nav() {
    // Now the nav element will be reevaluated by react when the context changes from the cart provider component
    const cartContext = useContext(CartContext); 

    // transforms an array of data into a single value 
    const numberOfCartItems = cartContext.items.reduce((currentNumber , item) => {
        return currentNumber + item.amount;
    },0);

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
                    🛒 
                    {/* {props.numberOfCartItems} */}


                    {/* context */}
                    {numberOfCartItems}

                    

                    </span>
                </li>
            </ul>

            {
                // isCartListVisible && <Cart showCartItems={props.showCartItems}/>
                isCartListVisible && <Cart/>
            }
        </div>
    )
}


export default Nav;


// @TODO
//  Change the onhover effect from li to indivdual span items