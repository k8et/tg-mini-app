import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ModalWindow = ({ children, closeWindow, className }) => {
  const background = useRef(null);
  const modalContent = useRef(null);
  const [mouseDownPosition, setMouseDownPosition] = useState(null);

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
          className="background-modal fixed inset-0 bg-modal flex justify-center items-center flex-col text-white z-[9999]"
      >
        <div
            ref={modalContent}
            className={`p-6 rounded-[15px] bg-white w-full flex flex-col gap-4 overflow-hidden ${
                className ? " " + className : ""
            }`}
        >
          {children}
        </div>
      </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  closeWindow: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ModalWindow;
