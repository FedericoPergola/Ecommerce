import "./ItemListContainer.css"

const IteamListContainer = ({title, img}) => {
    return(
        <div class="card card-products ">
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body d-flex justify-content-center">
                <p class="card-text">{title}</p>
            </div>
        </div> 
    )
}


export default IteamListContainer;