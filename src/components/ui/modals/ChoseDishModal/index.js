import React, {useEffect} from "react";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../commons/Button";


const ChoseDishModal = () => {
    const {isOpenModal, handlerToggleModal} = useModal();
    useEffect(() => {
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();

            const handleBackButtonClick = () => {
                handlerToggleModal();
                resetMainButton();
            };

            const setMainButton = () => {
                window.Telegram.WebApp.MainButton.text = "Назад";
                window.Telegram.WebApp.MainButton.show();
                window.Telegram.WebApp.onEvent('backButtonClicked', handleBackButtonClick);
            };

            const resetMainButton = () => {
                window.Telegram.WebApp.MainButton.text = "Выбрать";
                window.Telegram.WebApp.MainButton.show();
            };

            if (isOpenModal) {
                setMainButton(); // Устанавливаем кнопку "Назад" при открытии модального окна
            } else {
                resetMainButton(); // Возвращаем исходное состояние при закрытии модального окна
            }

            // Очистка обработчиков при размонтировании компонента
            return () => {
                window.Telegram.WebApp.offEvent('backButtonClicked', handleBackButtonClick);
                resetMainButton(); // Убедимся, что кнопка сбрасывается при размонтировании
            };
        }
    }, [isOpenModal, handlerToggleModal]);
    return (
        <>
            <Button onClick={handlerToggleModal}>
                Выбрать
            </Button>
            {isOpenModal && (
                <ModalWindow
                    closeWindow={handlerToggleModal}
                    className={"h-screen !w-screen !rounded-none !bg-[#101010] !p-0"}
                >
                    <div className={"my-auto"}>

                    </div>
                </ModalWindow>
            )}
        </>
    );
};

export default ChoseDishModal;
