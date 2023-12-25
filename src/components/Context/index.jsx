import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //  Shopping Cart · Increment Queantify
    const [count, setCount] = useState(0);

    // · Product Detail · Open/Close

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false); //* Recibe el objeto de información referente a la API

    
    // Shopping Cart · Products to Cart
    const [prodcutToShow, setProdcutToSho] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            prodcutToShow,
            setProdcutToSho,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
