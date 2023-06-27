import "./Card.css"
import CartItem from "./CartItem";


export default function Card(props) {
    return (
        <>
            <div className="cardContainer">

                {
                    props.products.map(product => {
                        return (
                            <CartItem product={product} />

                        )

                    })
                }
            </div >
        </>
    )
}