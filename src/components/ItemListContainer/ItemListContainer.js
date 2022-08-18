import  { useEffect, useState } from "react";
import "./ItemListContainer.css"
// import products from "../../utils/productsMock";
import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const IteamListContainer = () => {

    const [listProducts, setListproducts] = useState([])
    // const {category} = useParams()

    // const filterCategory = products.filter( (products) => products.category === category)

    // const getProducts = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (category) {
    //             resolve(filterCategory)
            
    //         } else {
    //             resolve(products)
    //         }
    //         resolve(products)   
    //     }, 500);
    // })

    const getProducts = async () =>{
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) =>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect( () =>{
        getProducts()
        .then((res) =>{
            setListproducts(res)
        })
    },)
    //         .then( (res) =>{
    //             setListproducts(res)
    //         })
    //         .catch( (e) =>{
    //             console.log("Error");
    //         })
    // }, [category])

    return(
        <>
        <ItemList dataProducts={listProducts}/>
        </>
    )
}


export default IteamListContainer;