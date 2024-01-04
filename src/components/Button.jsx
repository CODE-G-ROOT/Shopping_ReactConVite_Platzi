const Button = ({ color, children }) => {
    console.log(color);

    return (
        <div className="m-5">
            <button className="h-10 w-full text-white transition ease delay-[20] bg-orange-500 hover:bg-black rounded">
                {children}
            </button>
        </div>
    )
};

export default Button;
