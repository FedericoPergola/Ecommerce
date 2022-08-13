import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartList.css"


const CartList = () => {
    const { cartProducts, clearAll, clearProduct, totalCart } = useContext(CartContext)

    return (
        <div>
            { cartProducts.length > 0 ? 
                <><h2 className="text-center mt-3">Carrito de compras</h2>

                { cartProducts.map((product) => {
                    let totalPrice = product.price * product.count;

                    return(
                        
                        <div className="card mb-3 fs-4 container mt-3">
                            <div className="row g-12">
                                <div className="col-md-2">
                                    <img src= {`../assests/${product.img}`} class="cart-img" alt="..."></img>
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                        <div className=" text-start row">
                                            <p className="card-text">{product.title}</p>
                                            <span>${product.price}</span>
                                            <span>Cantidad:{product.count}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <div className="text-center pe-5">
                                            <p className="card-text">Total</p>
                                            <span className="fs-3">${totalPrice}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 d-flex align-self-center">
                                    <button className="button-trash" onClick={()=>clearProduct(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                                                
                    )

                }) }

                <div className="row g-12 w-100 mt-5 mb-5">
                    <div className="col-md-5 text-center">
                        <button className="btn btn-dark" onClick={() => clearAll()}>Borrar todo</button>
                    </div>
                    <div className="col-md-4 text-center">
                        Total final: ${ totalCart }
                    </div>
                </div>
                </>
                : 
                <>
                    <div className="row text-center">              
                        <h2 className="p-3">Carrito vacio</h2>
                        <h3><Link to="/">Volver</Link></h3>
                    </div>
                </>
            }
        </div>
    )
}  


export default CartList