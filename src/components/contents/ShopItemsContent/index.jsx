import Icon from "../../commons/Icon";
import {animated} from 'react-spring';

const ItemSnacks = ({style, item}) => {
    return (
        <animated.div style={style}
                      className="flex justify-between w-full flex-col items-center bg-[#151515] min-h-[108px] p-4 rounded">
            <div className="flex flex-col w-full justify-center">
                <div className="flex gap-[12px] items-center justify-between">
                    <div className="flex gap-[12px] items-center">
                        <img width={40} height={30} src={item.image} alt={item.name}/>
                        <div className="flex flex-col">
                            <h1 className="font-[500] text-[14px] leading-[16px]">{item.name}</h1>
                            <p className="font-[400] text-[10px] text-[#D7D7D766] leading-[11px]">{item.description}</p>
                        </div>
                    </div>
                    <button
                        className="max-w-[100px] min-w-[100px] h-[40px] font-[700] bg-[#0098EA] rounded-[5px] flex items-center justify-center gap-[6px]">
                        <Icon width={9} height={12} name={"ton-skeleton"}/>
                        {item.price}
                    </button>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                    <div className="flex gap-[7px]">
                        <div
                            className="py-[6px] px-[12px] rounded-[10px] font-[400] text-[12px] text-[#D7D7D766] bg-[#1A1A1A] leading-[6px]">
                            {item.duration}
                        </div>
                        <div
                            className="py-[6px] px-[12px] rounded-[10px] font-[400] text-[12px] text-[#0098EA] bg-[#06A8FF1A]/10 leading-[6px]">
                            {item.reward}
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};
const ItemUpgrades = ({style, item}) => {
    return (
        <animated.div style={style}
                      className="flex justify-between w-full flex-col items-center bg-[#151515] min-h-[108px] p-4 rounded">
            <div className="flex flex-col w-full">
                <div className="flex gap-[12px] items-center justify-between">
                    <div className="flex gap-[12px] items-center">
                        <img width={40} height={30} src={item.image} alt={item.name}/>
                        <div className="flex flex-col">
                            <h1 className="font-[500] text-[14px] leading-[16px]">{item.name}</h1>
                            <p className="font-[400] text-[10px] text-[#D7D7D766] leading-[11px]">{item.description}</p>
                        </div>
                    </div>
                    <button
                        className="max-w-[100px] min-w-[100px] h-[40px] font-[700] bg-[#0098EA] rounded-[5px] flex items-center justify-center gap-[6px]">
                        <Icon width={9} height={12} name={"ton-skeleton"}/>
                        {item.price}
                    </button>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                    <div className="flex gap-[7px]">
                        <div
                            className="py-[6px] px-[12px] rounded-[10px] font-[400] text-[12px] text-[#0098EA] bg-[#06A8FF1A]/10 leading-[6px]">
                            {item.reward}
                        </div>
                        <div
                            className="py-[6px] px-[12px] rounded-[10px] font-[400] text-[12px] text-[#D7D7D766] bg-[#1A1A1A] leading-[6px]">
                            {item.interval}
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};
export { ItemSnacks, ItemUpgrades };