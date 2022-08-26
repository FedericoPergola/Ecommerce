import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartList.css"
import  Modal  from "../Modal/Modal"
import db from "../../utils/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"



const CartList = () => {
    const { cartProducts, clearAll, clearProduct, totalCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product)=>{
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                count: product.count
            }
        }), 
        buyer: {}, 
        total: totalCart
    })

    const [formData, setFormdata] = useState({
        name: '',
        phone: '', 
        email: ''
    })

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        clearAll()
        pushData({...order, buyer:formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
    }

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
                        <button className="btn btn-light border border-dark px-4" onClick={() => clearAll()}>Borrar todo</button>
                    </div>
                    <div className="col-md-4 text-end fs-3">
                        Total final: ${ totalCart }
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <button className="w-25 btn btn-dark" onClick={() => setShowModal(true)}>Finaliar compra</button>
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
            {showModal &&
                <Modal title={"DATOS DE CONTACTO"} close={() => setShowModal()}>
                    {success ? (
                        <>
                            <h2>Se realizo Correctamente</h2>
                            <p>ID de compra: {success}</p>
                        </>
                    ) : (
                    <form className="w-75 mt-4" onSubmit={handleSubmit}>
                        <div class="mb-4">
                            {/* <label  class="form-label">Name</label> */}
                            <input type="text" name="name" placeholder="Ingrese su nombre" class="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>
                        <div class="mb-4">
                            {/* <label class="form-label">Phone</label> */}
                            <input type="number" name="phone" placeholder="Ingrese su telefono" class="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            />
                        </div>
                        <div class="mb-4">
                            {/* <label class="form-label">Email</label> */}
                            <input type="email" name="email" placeholder="Ingrese su email" class="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div class="my-4 form-check">
                            <input type="checkbox" class="form-check-input"/>
                            <label class="form-check-label" for="exampleCheck1">Terminos y condiciones</label>
                        </div>
                        <button type="submit" className="w-50 btn btn-dark" onClick={() => clearAll()}>Enviar</button>
                    </form>
                    )}
                </Modal>
            }
        </div>
    )
}  


export default CartList