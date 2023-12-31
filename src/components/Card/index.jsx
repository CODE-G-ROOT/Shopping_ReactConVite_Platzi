import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import * as icons from "react-icons/fa";

const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProdcutToSho(productDetail);
  };

  const addProductsToCart = (e, productData) => {
    // * realiza una especie de "push" manteniendo la información anteriormente almancenada
    e.stopPropagation(); // detiene la propagación del programa, para que realize solo una tarea
    context.setCount(context.count + 1); // se encarga de sumar 1 al estado de la cantidad de productos
    context.setCartProducts([...context.cartProducts, productData]); // almacena el contenido de la card seleccionada en un array en el contexto
    context.openCheckoutSideMenu(); // cambia el estado del sidemenu a true
    context.closeProductDetail(); // oculta el product Detail (cambia el estado a false)
  };

  return (
    <>
      <div
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProduct(data)}
      >
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-1 left-1 bg-white/60 rounded-md text-black text-sm m-1}" style={{ padding: "0 10px 0 10px" }}>{data.category.name}</span>
          <img
            className="w-full h-full object-fill rounded-md"
            src={data.images}
            alt="headphones"
          />
          <div //? Encargado de las funciones de la card 
            className=" m-2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
            onClick={(e) => addProductsToCart(e, data)}>
            <icons.FaPlus className="text-sm w-auto h-auto text-black"></icons.FaPlus>
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
