import  { useEffect, useState } from "react";
import "./ItemListContainer.css"
import products from "../../utils/productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const IteamListContainer = () => {

    const [listProducts, setListproducts] = useState([])
    const {category} = useParams()

    const filterCategory = products.filter( (products) => products.category == category)

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (category) {
                resolve(filterCategory)
            
            } else {
                resolve(products)
            }
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