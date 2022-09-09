import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({data}) => {
    const {title, img, price, stock, id} = data

    return(
            <div className='container'>
                    <div className="card card-products w-75">
                        <img src= {`../assests/${img}`} class="card-img-top" alt="..."></img>
                        <div className="card-body text-center">
                            <p className="card-text fs-5">{title}</p>
                            <span className='fs-4 fw-bold'>${price}</span>
                            <Link to={`/products/${id}`}>
                                <button className='w-100 mt-3 border-0'><span>Ver detalle</span></button>
                            </Link> 
                        </div>
                    </div>
            </div>
    )
}


export default Item;