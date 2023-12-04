const Card = () => {
    return (
        <>
            <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
                <figure className="relative mb-2 w-full h-4/5"> {/* Aquí debería ir un h-4/5; sin embargo no está por que luego no muestra la parte de Headphones. */}
                    <span className="absolute left-0 bottom-0 rounded-lg bg-white/60 text-blakc text-sm m-1 px-1}">Electronics</span>
                    <img
                        className="w-full h-full object-cover" 
                        src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="headphones" 
                    />
                    <div className=" m-2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
                        +
                    </div>
                </figure>
                <p className="flex justify-between">
                    <span className="text-sm font-light">Headphones</span>
                    <span className="text-ls font-medium">$300</span>
                </p>

            </div>
        </>
    );
};

export default Card;