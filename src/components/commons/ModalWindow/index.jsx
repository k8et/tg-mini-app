import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";

const ModalWindow = ({ children, closeWindow, className }) => {
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

    useEffect(() => {
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();

            const handleBackButtonClick = () => {
                closeWindow();
            };

            const setBackButton = () => {
                window.Telegram.WebApp.BackButton.show();
                window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
                window.Telegram.WebApp.BackButton.text = "Back";
            };

            const hideBackButton = () => {
                window.Telegram.WebApp.BackButton.hide();
            };

            setBackButton();

            return () => {
                hideBackButton();
                window.Telegram.WebApp.BackButton.offClick(handleBackButtonClick);
            };
        }
    }, [closeWindow]);

    return (
        <div
            ref={background}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            className="background-modal fixed inset-0 bg-black/20 px-3 overflow-hidden flex justify-center items-center flex-col text-white z-[9999]"
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

ModalWindow.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    closeWindow: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default ModalWindow;
