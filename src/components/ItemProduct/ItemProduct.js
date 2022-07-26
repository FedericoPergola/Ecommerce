import ItemCount from '../ItemCount/ItemCount'

const Itemproduct = ({data}) => {
    const {title, img, price, stock} = data

    return(
        <div class="card card-products ">
            <img src= {img} class="card-img-top" alt="..."></img>
            <div class="card-body text-center">
                <p class="card-text">{title}</p>
                <span>$ {price}</span>
                <ItemCount stock={stock}/>
            <button className='w-100'>Ver detalle</button>
            </div>
        </div> 
    )
}


export default Itemproduct;