import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const { cartProducts, totalProducts } = cartContext;

    return(
        <div className="cart">
        <Link to={"/cart"}>
          {
            cartProducts.length > 0
            ?
            <span class="position-absolute top-1 start-85 translate-middle badge">{totalProducts}</span>
            : ""
          }
        <button  class="btn  position-relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
        </button>
        </Link>
      </div>
    )
}


export default CartWidget