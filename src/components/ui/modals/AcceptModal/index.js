import React from "react";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import "swiper/swiper-bundle.css";
import Button from "../../../commons/Button";

const AcceptModal = ({children}) => {
    const {isOpenModal, handlerToggleModal} = useModal();

    return (
        <>
            <button onClick={handlerToggleModal}>
                {children}
            </button>

            {isOpenModal && (
                <ModalWindow
                    closeWindow={handlerToggleModal}
                    className={"  "}
                >
                    <div className={"bg-[#181818] rounded-[10px] p-3"}>
                        <h1 className={"text-[14px]"}>Подтвердите действие</h1>
                        <div className={"flex gap-[6px] mt-[12px]"}>
                            <Button onClick={handlerToggleModal} className={"!h-[30px] !text-[12px]"}>
                                Ок
                            </Button>
                            <Button onClick={handlerToggleModal} className={"!h-[30px] !bg-[#1D1D1D] !text-[12px] text-[#FFFFFF66]/40"}>
                                Отмена
                            </Button>
                        </div>
                    </div>
                </ModalWindow>
            )}
        </>
    );
};

export default AcceptModal;
