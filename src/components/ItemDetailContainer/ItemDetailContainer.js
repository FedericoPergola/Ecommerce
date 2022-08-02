import  { useEffect, useState } from "react";
import products1 from "../../utils/productsMock1";
import ItemDetail from "./ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{
    const [listProducts, setListproducts] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products1)   
        }, 2000);
    })

    useEffect( () =>{
        getItem
            .then( (res) =>{
                setListproducts(res)
            })
            .catch( (e) =>{
                console.log("Error");
            })
    }, [])
    console.log(listProducts);
    return(
        <>
        <ItemDetail dataDetail={listProducts}/>
        </>
    )
}

export default ItemDetailContainer;