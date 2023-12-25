import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //  Shopping Cart · Increment Queantify
    const [count, setCount] = useState(0);

    // · Product Detail · Open/Close

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false); //* Recibe el objeto de información referente a la API

    
    // Product Detail · Show Products
    const [prodcutToShow, setProdcutToSho] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            prodcutToShow,
            setProdcutToSho
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
