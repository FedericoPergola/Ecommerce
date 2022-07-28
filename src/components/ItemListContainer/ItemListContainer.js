import  { useEffect, useState } from "react";
import "./ItemListContainer.css"
import products from "../../utils/productsMock";
import ItemList from "../ItemList/ItemList";

const IteamListContainer = () => {

    const [listProducts, setListproducts] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)   
        }, 2000);
    })

    useEffect( () =>{
        getProducts
            .then( (res) =>{
                setListproducts(res)
            })
            .catch( (e) =>{
                console.log("Error");
            })
    }, [])

    return(
        <>
        <ItemList dataProducts={listProducts}/>
        </>
    )
}


export default IteamListContainer;