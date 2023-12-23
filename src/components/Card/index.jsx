import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-1 left-1 bg-white/60 rounded-md text-black text-sm m-1}" style={{ padding: "0 10px 0 10px" }}>{data.category.name}</span>
          <img
            className="w-full h-full object-fill rounded-md"
            src={data.images}
            alt="headphones"
          />
          <div
            className=" m-2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
            onClick={() => context.setCount(context.count + 1)}>
            +
          </div>
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light">{data.title}</span>
          <span className="text-ls font-medium">{data.price}</span>
        </p>
      </div>
    </>
  );
};
//
export default Card;
