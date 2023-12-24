import * as icon from "react-icons/io";
import './styles.css'
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const ProcutDetail = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <>
            <aside
                className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product_detail flex-col fixed bg-white right-0 border-slate-950 border-2 rounded-lg`}

            >
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>Detail</h2>
                    <div><icon.IoMdClose onClick={()=> context.closeProductDetail()} className="cursor-pointer"></icon.IoMdClose></div>
                </div>
            </aside>
        </>
    )
};

export default ProcutDetail;
