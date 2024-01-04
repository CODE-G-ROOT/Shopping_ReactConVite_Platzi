import * as icon from "react-icons/io";
import './styles.css'
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import Button from "../Button";


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);
    const data = context.prodcutToShow;

    const addToCart = () => {
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, data]);
    };

    return (
        <>
            <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product_detail flex-col justify-between fixed bg-white right-0 shadow-lg shadow-neutral-500 rounded-lg`}>
                <div>
                    <div className='flex justify-between items-center p-6'>
                        <h2 className='font-medium text-xl'>Detail</h2>
                        <div><icon.IoMdClose onClick={() => context.closeProductDetail()} className="cursor-pointer"></icon.IoMdClose></div>
                    </div>

                    <figure className="px-3">
                        <img
                            className="w-full h-full rounded-lg"
                            src={data.images} />
                    </figure>
                    <p className="flex flex-col p-6 gap-3">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-xl">{data.title}</span>
                            <span className="font-light text-xl"><b>${data.price}</b></span>
                        </div>
                        <span className="font-light text-md">{data.description}</span>
                    </p>
                </div>
                <div onClick={() => addToCart()}>
                    <Button>
                        Add to Cart
                    </Button>
                </div>
            </aside >
        </>
    )
};

export default ProductDetail;
