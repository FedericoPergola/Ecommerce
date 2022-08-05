import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({data}) => {
    const {title, img, price, stock, id} = data

    return(
        <div className="card card-products ">
            <img src= {`./assests/${img}`} class="card-img-top" alt="..."></img>
            <div className="card-body text-center">
                <p className="card-text">{title}</p>
                <span>$ {price}</span>
                <ItemCount stock={stock}/>
                <Link to={`/productos/${id}`}>
                    <button className='w-100'>Ver detalle</button>
                </Link> 
            </div>
        </div>
    )
}


export default Item;