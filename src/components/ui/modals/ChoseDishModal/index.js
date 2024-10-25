import React, {useEffect} from "react";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../commons/Button";


const ChoseDishModal = () => {
    const {isOpenModal, handlerToggleModal} = useModal();
    useEffect(() => {
        const webApp = window.Telegram.WebApp;
        webApp.BackButton.show();

        webApp.BackButton.onClick(() => {
            if (isOpenModal) {
                handlerToggleModal();
            } else {
                console.log("Back button clicked");
            }
        });

        return () => {
            webApp.BackButton.hide();
        };
    }, [isOpenModal]);
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