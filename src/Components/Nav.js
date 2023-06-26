
import "./Nav.css";

function Nav  () {
    return(
        <div className = "navContainer">
            <ul className = "navUl">
                <li className="navLi1">
                    Logo
                </li>
                <li>
                    categories
                </li>
                <li>
                    shop
                </li>
                <li className = "cartIcon">
                    🛒
                </li>
            </ul>

        </div>
    )
}


export default Nav;