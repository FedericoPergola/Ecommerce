import { Link } from 'react-router-dom'

const Item = ({data}) => {
    const {title, img, price, stock, id} = data

    return(
        <div className="card card-products ">
            <img src= {`../assests/${img}`} class="card-img-top" alt="..."></img>
            <div className="card-body text-center">
                <p className="card-text">{title}</p>
                <span>$ {price}</span>
                <Link to={`/products/${id}`}>
                    <button className='w-100 mt-4'>Ver detalle</button>
                </Link> 
            </div>
        </div>
    )
}


export default Item;