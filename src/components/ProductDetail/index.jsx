import * as icon from "react-icons/io";
import './styles.css'

const ProcutDetail = () => {


    return (
        <>
            <aside className=" product_detail flex flex-col fixed bg-white right-0 border-slate-950 border-2 rounded-lg">
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>Detail</h2>
                    <div><icon.IoMdClose></icon.IoMdClose></div>
                </div>
            </aside>
        </>
    )
};

export default ProcutDetail;
