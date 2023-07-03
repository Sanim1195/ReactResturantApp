import "./Card.css"
import CardItem from "./CardItem";


export default function Card(props) {
    const addToCartHandler = props.addToCartHandler;
    return (
        <>
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