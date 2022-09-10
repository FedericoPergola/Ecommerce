import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartList.css"
import  Modal  from "../Modal/Modal"
import db from "../../utils/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import { Bars } from  'react-loader-spinner'



const CartList = () => {
    const { cartProducts, clearAll, clearProduct, totalCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()
    const [ showSpinner, setShowSpinner ] = useState(false)

   

    const clear = ()=>{
        Swal.fire({
            title: '¿Queres eliminar todos los productos?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Productos eliminados',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                })
                clearAll() 
            }
          })
    }
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
        date: new Date().toLocaleString(),
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
                        <button className="btn btn-dark px-4" onClick={() => clear()}><span>Borrar todo</span></button>
                    </div>
                    <div className="col-md-4 text-end fs-3">
                        Total final: ${ totalCart }
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <button className="w-25 btn addCart" onClick={() => setShowModal(true)}><span>Finaliar compra</span></button>
                </div>
                </>
                : 
                <>
                    <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"  class="bi bi-cart-x-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>              
                        <h2 className="p-3">Carrito vacio</h2>
                        <Link to="/" className="text-dark"><button class="btn addCart px-5"><span>Volver</span></button></Link>
                    </div>
                </>
            }
            {showModal &&
                <Modal close={() => setShowModal()}>
                    {success ? (
                        <>
                            <h2 className="mt-5 text-success fs-1 text-center">¡Su pedido se realizo correctamente!</h2>
                            <p className="mt-5 fs-2 text-center">ID de compra: {success}</p>
                            <div className="d-flex justify-content-center">
                            <button className="w-50 btn btn-dark mt-5 "><Link to="/" className="text-light"><span>Volver al inicio</span></Link></button>
                            </div>
                        </>
                    ) : (
                    <>
                    <h2 className="my-5 text-center fs-1">Datos de contacto</h2> 
                    <form className="w-75 mt-4 container text-center" novalidate onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <input type="text" name="name" placeholder="Ingrese su nombre" class="form-control" id="nameID" required
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>
                        <div class="mb-4">
                            <input type="number" name="phone" placeholder="Ingrese su telefono" class="form-control" required
                            value={formData.phone}
                            onChange={handleChange}
                            />
                        </div>
                        <div class="mb-4">
                            <input type="email" name="email" placeholder="Ingrese su email" class="form-control" required
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div> 
                            { showSpinner && 
                            formData.name.length !== 0 &&
                            formData.phone.length !== 0 &&
                            formData.email.length !== 0 
                            
                            ?
                            <Bars className="bars" color = 'black' width = "300" height = "300" ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}/> : "" }
                            <button type="submit" className="w-50 btn btn-dark" onClick={() => setShowSpinner(true)}><span>Enviar</span></button>
                        </div>
                    </form>
                    </>
                    )}
                </Modal>
            }
        </div>
    
    )
}  


export default CartList