import PropTypes from "prop-types";
import Icon from "../Icon/index.jsx";

const Input = (props) => {
    const {
        value,
        onChange,
        newChange,
        error,
        name,
        search,
        icon,
        label,
        placeholder,
        type,
        className,
        symbol,
        ...rest
    } = props;

    const handlerChange = (e) => {
        const { value, name } = e.target;

        if (type === "number" && !/^-?\d*\.?\d*$/.test(value)) return;

        onChange?.({ name, value });
    };


    return (
        <label className="flex flex-col w-full">
            {label && <span className="text-[#ABABB0] mb-1  text-[13px]">{label}</span>}
            <div className="relative py-[0px] w-full flex gap-[8px] items-center">
                <input
                    className={`relative ${error && "border-red-500"} bg-[#1D1D1D] placeholder:text-white/20 text-[12px] font-[500] !text-white border border-black/5 rounded-[10px] h-[30px] px-2 w-full focus:outline-none focus:shadow-none  ${className} ${(icon || symbol) && "pr-6"} ${search && "pl-8"}`}
                    type={"text"}
                    value={value}
                    onChange={newChange ? newChange : handlerChange}
                    name={name}
                    placeholder={placeholder}
                    {...rest}
                />
                {search && <Icon width={22} height={14} name={"search"} className="absolute left-2"/>}
                {icon && (typeof icon === "string" ?
                    <Icon name={icon} className="!w-[18px] dark:text-white absolute right-0 !h-[12px]"/> : icon)}
                {symbol &&
                    <span  className="!w-[18px] text-[14px] text-black absolute  right-0 my-auto ">{symbol}</span>}
                <div
                    className={
                        "absolute inset-0 border-gray peer-focus:border-[#FFF4F3] peer-focus:shadow-input -z-10 duration-200" +
                        (error ? " peer-focus:shadow-input-invalid" : "")
                    }
                />
            </div>
            {error && <span className="text-[12px] text-red-500">{error}</span>}
        </label>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    newChange: PropTypes.any,
    className: PropTypes.any,
    symbol: PropTypes.any,
    search: PropTypes.any,

};

export default Input;
