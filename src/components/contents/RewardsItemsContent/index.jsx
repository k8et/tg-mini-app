import {animated, useSpring} from "react-spring";
import Icon from "../../commons/Icon";
import React from "react";

const RewardsItemsContent = ({item, index}) => {
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: {opacity: 0, transform: 'translateY(-20px)'},
        config: {tension: 200, friction: 15},
        delay: index * 200
    });

    return (
        <animated.div key={index} style={animationProps}
                      className="w-full h-[72px] bg-[#151515] rounded-[10px] flex px-[16px] items-center gap-[12px] justify-between">
            <div className={"flex gap-[12px] items-start"}>
                <div className={"min-w-[40px] h-[40px] bg-[#1A1A1A] rounded-full"}>

                </div>
                <div className="flex flex-col">
                    <h1 className="font-[500] text-[14px] leading-[16px] whitespace-pre-line">{item.description}</h1>
                </div>
            </div>
                <button
                    className="max-w-[100px] min-w-[100px] h-[40px] font-[700] bg-[#1A1A1A] rounded-[5px] flex items-center justify-center gap-[6px]">
                    <Icon width={17} height={17} name={"ton"}/>
                    +{item.points}
                </button>
        </animated.div>
    );
};

export default RewardsItemsContent