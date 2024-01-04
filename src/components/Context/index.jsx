import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    //  Shopping Cart · Increment Queantify
    const [count, setCount] = useState(0);

    // · Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // · Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);


    // Product Detail · Show product
    const [prodcutToShow, setProdcutToSho] = useState({}); // muestra el producto seleccionado

    // Shopping Cart · Products to Cart
    const [cartProducts, setCartProducts] = useState([]); // almacena los productos

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
