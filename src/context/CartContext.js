import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => { 
    const [cartProducts, setCartProducts] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    let [totalProducts, setTotalProducts] = useState(0)

    const addProductToCart = (product, ItemCount) => {
        let isProductInCart = cartProducts.find(
            (productInCart) => productInCart.id === product.id
        );

        if(isProductInCart) {
            if(isProductInCart.count + ItemCount > isProductInCart.stock){
            
            return false;
        } 
            isProductInCart.count += ItemCount
            setTotalProducts(isProductInCart.count + totalProducts)
            
        } else {
            product.count = ItemCount;
            setTotalProducts(ItemCount + totalProducts)
            
            setCartProducts ([...cartProducts, product]);
        }   

        setTotalCart(
            totalCart + product.price * product.count
        )
    }

    const clearAll = () => {
        setCartProducts([])
        setTotalProducts(0)
        setTotalCart(0)
    }

    const clearProduct = ( id ) => {
        const prod = cartProducts.find((product) => product.id === id)
        setTotalCart(
            totalCart - prod.price * prod.count
        )

        setTotalProducts(totalProducts - prod.count)

        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts(newCart);
    }

    const data = {
        cartProducts,
        setCartProducts,
        clearAll,
        totalCart,
        totalProducts,
        clearProduct,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider