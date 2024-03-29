import  { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
//Firebase
import db from "../../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore"




const ItemDetailContainer = () =>{
    const [listProducts, setListproducts] = useState([])
    const { id } = useParams()
    
    useEffect( () =>{
        getProduct()
        .then((res) =>{
            setListproducts(res)
        })
    }, [id])

    const getProduct = async ()=>{
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    return(
        <>
        <ItemDetail data={listProducts}/>
        </>
    )
}

export default ItemDetailContainer;