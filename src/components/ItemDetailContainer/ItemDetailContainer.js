import  { useEffect, useState } from "react";
import products from "../../utils/productsMock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    const [listProducts, setListproducts] = useState([])

    // const getItem = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(products)   
    //     }, 2000);
    // })

    // useEffect( () =>{
    //     getItem
    //         .then( (res) =>{
    //             setListproducts(res)
    //         })
    //         .catch( (e) =>{
    //             console.log("Error");
    //         })
    // }, [])
    // console.log(listProducts);
    
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