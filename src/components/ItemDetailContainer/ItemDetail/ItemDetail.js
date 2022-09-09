import "./ItemDetail.css"
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({data}) =>{
    const {stock} = data

    const [quantitySelected, setQuantitySelected] = useState(0);
    console.log("Count:", quantitySelected)

            return(
                <>
                <div className="itemDetail-container d-flex justify-content-center pt-5">
                    <div className="itemDetail-img ">
                        <img className="border border-dark" src= {`../../assests/${data.img}`} alt="..."></img>
                    </div>
                    <div className="itemDetail-info">
                        <h1 className="fs-3 p-2">{data.title}</h1>
                        <p className="fs-3 p-2">${data.price}</p>
                        {
                            quantitySelected > 0 ? <div className="mt-5">
                                                        <Link to={'../cart'}><button class="btn addCart w-75" type="button"><span>Terminar Compra</span></button></Link>
                                                        <Link to={'../products'}><button class="btn btn-light buy w-75 mt-2" type="button">Seguir comprando</button></Link>
                                                    </div> : 
                            <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} productData={data}/>
                        }
                    </div>
                </div>
                </>
            )
        }

export default ItemDetail;