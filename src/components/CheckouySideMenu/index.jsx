import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

// icons
import * as icon from "react-icons/io";

// styles
import './styles.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <>
            <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}  checkout-side-menu flex-col fixed bg-white right-0 shadow-2xl rounded-lg`}>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>My Order</h2>
                    <div><icon.IoMdClose onClick={() => context.closeCheckoutSideMenu()} className="cursor-pointer"></icon.IoMdClose></div>
                </div>

            </aside>
        </>
    )
};

export default CheckoutSideMenu;
