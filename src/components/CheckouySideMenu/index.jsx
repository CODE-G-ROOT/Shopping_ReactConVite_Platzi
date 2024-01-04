// Context
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

// icons
import * as icon from "react-icons/io";

// styles
import './styles.css'

// Components
import OrderCard from "../OrderCard";
import Button from "../Button";


const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <>
            <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} overflow-auto checkout-side-menu flex-col justify-between fixed bg-white right-0 shadow-lg shadow-neutral-500 rounded-lg z-10 `}>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>My Order</h2>
                    <div><icon.IoMdClose onClick={() => context.closeCheckoutSideMenu()} className="cursor-pointer"></icon.IoMdClose></div>
                </div>
                <div className="overflow-y-auto">
                    <div className="p-2">
                        {
                            context.cartProducts ? context.cartProducts.map((product) => (
                                <>
                                    <OrderCard
                                        key={product.id}
                                        title={product.title}
                                        price={product.price}
                                        imageUrl={product.images}
                                    />
                                </>
                            )) : <>Not Found</>
                        }
                    </div>
                </div>
                <Button >
                    BUY
                </Button>
            </aside>
        </>
    )
};

export default CheckoutSideMenu;

