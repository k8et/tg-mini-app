import {animated, useSpring} from "react-spring";
import Icon from "../../commons/Icon";
import React from "react";

const FriendItem = ({ item, index }) => {
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
        config: { tension: 200, friction: 15 },
        delay: index * 200
    });

    return (
        <animated.div key={index} style={animationProps} className="w-full h-[72px] bg-[#151515] rounded-[10px] flex px-[16px] items-center justify-between">
            <div className={"flex gap-[12px] items-start"}>
                <img width={40} height={40} src={"/assets/img/cat.png"} alt="" />
                <div className="flex flex-col">
                    <h1 className="font-[500] text-[14px] leading-[16px]">{item.year}</h1>
                    <p className="font-[400] text-[10px] text-[#D7D7D766] leading-[11px]">
                        {item.username}
                    </p>
                </div>
            </div>
            <div>
                <button
                    className="max-w-[100px] min-w-[100px] h-[40px] font-[700] bg-[#1A1A1A] rounded-[5px] flex items-center justify-center gap-[6px]">
                    <Icon width={17} height={17} name={"ton"} />
                    +{item.points}
                </button>
            </div>
        </animated.div>
    );
};

export default FriendItem