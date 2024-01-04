import * as reactIcon from "react-icons/io";

const OrderCard = props => {

    const { title, imageUrl, price } = props;

    return (
        <div className="flex justify-between items-center my-2 relative">
            <div className="flex items-center gap-3">
                <figure className="size-20">
                    <img
                        className="size-full rounded-lg object-cover"
                        src={imageUrl}
                        alt={title} />
                </figure>
                <p className="text-sm font-light w-32">
                    {title}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-md font-medium">{price}</p>
                <reactIcon.IoIosClose
                    className="size-6 text-black cursor-pointer" />
            </div>
            <span className="absolute bottom-0 left-0 w-10 bg-orange-500 rounded-md  text-white text-center ">30x</span>
        </div>
    )
};

export default OrderCard;