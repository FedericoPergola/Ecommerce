import  { useEffect, useState } from "react";
import products from "../../utils/productsMock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    const [listProducts, setListproducts] = useState([])
    const { id } = useParams()
    
    const filterById = () =>{
        products.some( (products) =>{
            if (products.id == id) {
                setListproducts(products)
            }
        })
    }
    useEffect( () =>{
        filterById()
    }, [])
    return(
        <>
        <ItemDetail data={listProducts}/>
        </>
    )
}

export default ItemDetailContainer;