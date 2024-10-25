const Button = ({children, className, ...rest}) => {
    return (
        <button
            className={` rounded-[10px] w-full text-white py-[6px] text-[16px] font-[500] flex gap-[4px] items-center justify-center bg-[#0098EA] ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};


export default Button;
