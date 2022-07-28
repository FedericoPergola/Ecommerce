import ItemCount from '../ItemCount/ItemCount'

const Item = ({data}) => {
    const {title, img, price, stock} = data

    return(
        <div className="card card-products ">
            <img src= {img} class="card-img-top" alt="..."></img>
            <div className="card-body text-center">
                <p className="card-text">{title}</p>
                <span>$ {price}</span>
                <ItemCount stock={stock}/>
            <button className='w-100'>Ver detalle</button>
            </div>
        </div> 
    )
}


export default Item;