import "./ItemCount.css"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemCount = ({stock, setQuantitySelected, productData}) =>{
    const [count, setCount] = useState(1)
    const {addProductToCart} = useContext(CartContext)
    
    const mostarAlerta = () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            toast: true,
            showConfirmButton: false,
            timer: 1500
          })
    }

    const addNumber = () =>{
        if (stock !== count) {
        setCount(count + 1)
        }
    }

    const restNumber = () =>{
        if (count !== 1) {
            setCount(count - 1)
        }
    }

    const onAdd = (count) =>{
        addProductToCart(productData, count)
        setQuantitySelected(count)
        mostarAlerta()
        
    }

    return(
        <>
        <div class="stock mt-2 d-flex">
            <button onClick={restNumber}>-</button>
            <p>{count}</p>
            <button className='button2' onClick={addNumber}>+</button>
        </div>
        <div>
            <p>Unidades diponibles {stock}</p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                </svg> 6 cuotas sin interés
            </p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                </svg> Descuento pagando por transferencia bancaria ó efectivo       
            </p>
        </div>
        <div class="d-grid gap-2 mt-5 w-75">
            <button class="btn addCart" type="button" onClick={()=> onAdd(count)}><span>Agregar al carrito</span></button>
        </div>
        </>
    )
}

export default ItemCount