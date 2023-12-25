import * as icon from "react-icons/io";
import './styles.css'
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);
    console.log({ "PRODUCT_TO_SHOW": context.prodcutToShow });

    return (
        <>
            <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product_detail flex-col fixed bg-white right-0 shadow-2xl rounded-lg`}>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>Detail</h2>
                    <div><icon.IoMdClose onClick={() => context.closeProductDetail()} className="cursor-pointer"></icon.IoMdClose></div>
                </div>

                <figure className="px-3">
                    <img
                        className="w-full h-full rounded-lg"
                        src={context.prodcutToShow.images} />
                </figure>
                <p className="flex flex-col p-6 gap-3">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-xl">{context.prodcutToShow.title}</span>
                        <span className="font-light text-xl"><b>${context.prodcutToShow.price}</b></span>
                    </div>
                    <span className="font-light text-md">{context.prodcutToShow.description}</span>
                </p>
            </aside>
        </>
    )
};

export default ProductDetail;
