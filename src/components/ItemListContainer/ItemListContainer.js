
import Itemproduct from "../ItemProduct/ItemProduct";
import "./ItemListContainer.css"

const IteamListContainer = ({data}) => {
    const product1 = {
        title: "Mate 1",
        img : "./assests/mate1.jpeg",
        price: 1500, 
        stock: 6
    }
    const product2 = {
        title: "Mate 1",
        img : "./assests/mate2.jpeg",
        price: 1800, 
        stock: 4
    }

    return(
        <>
        <Itemproduct data={product1}/>
        <Itemproduct data={product2}/>
        </>
    )
}


export default IteamListContainer;