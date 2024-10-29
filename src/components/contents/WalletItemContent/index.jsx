import React from 'react';
import { useSpring, animated } from "react-spring";

function WalletItem({ date, time, amount, index }) {
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-15px)' },
        config: { tension: 200, friction: 15 },
        delay: index * 200,
    });

    return (
        <animated.div style={animationProps} className="flex justify-between items-center h-[32px] px-[12px] bg-[#252525] rounded-lg shadow-md">
            <div className="text-[#D7D7D7] space-x-[4px] text-[12px]">
                <span>{date}</span> <span className={"text-[#D7D7D766]/40"}>{time}</span>
            </div>
            <div className="text-[12px] font-[500] text-[#D7D7D7]">
                {amount}
            </div>
        </animated.div>
    );
}

export default WalletItem;
