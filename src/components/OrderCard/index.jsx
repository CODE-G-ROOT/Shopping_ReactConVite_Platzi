import * as reactIcon from "react-icons/io";

const OrderCard = props => {

    const { title, imageUrl, price } = props;

    return (
        <div className="flex justify-between items-center p-1">
            <div className="flex items-center gap-3">
                <figure className="size-20">
                    <img
                        className="size-full rounded-lg object-cover"
                        src={imageUrl}
                        alt={title} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <reactIcon.IoIosClose 
                className="size-6 text-black cursor-pointer" />
            </div>
        </div>
    )
};

export default OrderCard;