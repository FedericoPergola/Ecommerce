import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartList.css"


const CartList = () =>{
    const { CartProducts} = useContext(CartContext)

    return(
        <>
        {/* {CartProducts.map((product) =>{
            return(
             <>   */}
            {console.log(CartProducts)};
            <h2 className="text-center">Carrito de compras</h2>
                <div className="card mb-3 fs-4 container mt-5">
                    <div className="row g-12">
                        <div className="col-md-2">
                            <img src= {`../assests/mate1.jpeg`} class="cart-img" alt="..."></img>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <div className=" text-start row">
                                    <p className="card-text">Mate 1</p>
                                    <span>$1500</span>
                                    <span>Cantidad: 1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <div className="text-center pe-5">
                                    <p className="card-text">Total</p>
                                    <span className="fs-3">$ 1500</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 d-flex align-self-center">
                            <button className="button-trash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg></button>
                        </div>
                    </div>
                </div>
            </>  
            )}
    //     })}
    // </>
//     )
// }

export default CartList