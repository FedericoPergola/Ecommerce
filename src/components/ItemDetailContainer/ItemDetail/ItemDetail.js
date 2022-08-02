import "./ItemDetail.css"

const ItemDetail = ({dataDetail}) =>{
    return(
        <>
         {dataDetail.map( (products1) =>{
            return(
                <>
                <div className="itemDetail-container d-flex justify-content-center mt-5">
                    <div className="itemDetail-img ">
                        <img className="border border-dark"src= {products1.img} alt="..."></img>
                    </div>
                    <div className="itemDetail-info">
                        <h1 className="fs-3 p-2">{products1.title}</h1>
                        <h3 className="fs-5 p-2 mt-5 w-75">{products1.description}</h3>
                        <p className="fs-3 p-2">${products1.price}</p>
                        <div>
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
                        <div class="d-grid gap-2 w-75">
                            <button class="btn btn-dark" type="button">Agregar al carrito</button>
                            <button class="btn btn-light border border-dark" type="button">Comprar</button>
                        </div>
                    </div>
                </div>
                </>
            )
        })}
        </>
    )
}

export default ItemDetail;