import {  useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import useBackButtonTg from "../../../hooks/useBackButtonTg";

const ModalWindow = ({ children, closeWindow, className,disableBackButton }) => {
    const background = useRef(null);
    const modalContent = useRef(null);
    const [mouseDownPosition, setMouseDownPosition] = useState(null);

    const modalSpring = useSpring({
        transform: "translateY(0%)",
        from: { transform: "translateY(100%)" },
        config: { tension: 280, friction: 40 },
    });

    const handleMouseDown = (e) => {
        setMouseDownPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
        if (e.target === background.current && closeWindow) {
            if (
                mouseDownPosition &&
                modalContent.current &&
                !modalContent.current.contains(e.target) &&
                mouseDownPosition.x > modalContent.current.getBoundingClientRect().left &&
                mouseDownPosition.x < modalContent.current.getBoundingClientRect().right &&
                mouseDownPosition.y > modalContent.current.getBoundingClientRect().top &&
                mouseDownPosition.y < modalContent.current.getBoundingClientRect().bottom
            ) {
                return;
            }
            closeWindow();
        }
        setMouseDownPosition(null);
    };

    useBackButtonTg(() => {
        if (closeWindow) {
            closeWindow();
        }
    }, !disableBackButton);

    return (
        <div
            ref={background}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            className="background-modal fixed inset-0 bg-black/80 px-3 overflow-hidden flex justify-center items-center flex-col text-white z-[9999]"
        >
            <animated.div
                ref={modalContent}
                style={modalSpring}
                className={`rounded-[15px] bg-[#181818] w-full flex flex-col gap-4 overflow-hidden ${
                    className ? " " + className : ""
                }`}
            >
                {children}
            </animated.div>
        </div>
    );
};


export default ModalWindow;
