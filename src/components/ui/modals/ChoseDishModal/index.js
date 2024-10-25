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

            // Функция для обработки нажатия на кнопку "Назад"
            const handleBackButtonClick = () => {
                handlerToggleModal(); // Закрытие модального окна
            };

            const setBackButton = () => {
                window.Telegram.WebApp.BackButton.show(); // Показываем кнопку
                window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
            };

            const hideBackButton = () => {
                window.Telegram.WebApp.BackButton.hide();
            };

            if (isOpenModal) {
                setBackButton();
            } else {
                hideBackButton();
            }

            return () => {
                hideBackButton(); // Скрываем кнопку при размонтировании
                window.Telegram.WebApp.BackButton.offClick(handleBackButtonClick); // Удаляем обработчик
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
