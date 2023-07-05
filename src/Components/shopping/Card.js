import { useContext } from "react";
import "./Card.css"
import CardItem from "./CardItem";
import CartContext from "../../Store/cart-context";

// the cart component adds an item to the cart
// The iformation of the product clicked by the user is being passed as an argument from cardItem component to the addToCart function which is defined here and it is here the updating happens.

// Finally in the cart maps the items in the items list (which is stored as an objct in our context)

export default function Card(props) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount, productInfo) => {
        cartCtx.addItem({
            id: productInfo.id,
            name: productInfo.productName,
            quantity: amount,
            price: productInfo.price

        })
    };

    return (
        <>
            {console.log(cartCtx)}

            {/* Div that holds all the cards */}
            <div className="cardContainer">
                {
                    props.products.map(product => {
                        return (
                            <CardItem key={product.id} product={product} addToCartHandler={addToCartHandler} />

                        )
                    })
                }
            </div >
        </>
    )
}