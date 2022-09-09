import  { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const IteamListContainer = () => {

    const [listProducts, setListproducts] = useState([])
    const {category} = useParams()

    
    useEffect(() =>{
        const getProducts = async () =>{
            const productCollection = category
            ? query(collection(db, "productos"), where("category", "==", category))
            
            :collection(db, 'productos')
            
            
            const productSnapshot = await getDocs(productCollection)
            const productList = productSnapshot.docs.map( (doc) =>{
                let product = doc.data()
                product.id = doc.id
                return product
            })
            return productList
        }

        getProducts()
        .then((res) =>{
            setListproducts(res)
        })
    }, [category])

    return(
        <>
        <section className='IteamListContainer'>
            <ItemList dataProducts={listProducts}/>
        </section>
        </>
    )
}


export default IteamListContainer;