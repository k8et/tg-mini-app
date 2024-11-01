import React from "react";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import "swiper/swiper-bundle.css";
import Button from "../../../commons/Button";
import Icon from "../../../commons/Icon";

const QuestionWalletModal = () => {
    const {isOpenModal, handlerToggleModal} = useModal();

    return (
        <>
            <button
                onClick={handlerToggleModal}
                className={"rounded-[10px] custom-button w-[25px] h-[24px]  flex justify-center items-center"}
            >
                <Icon width={25} height={24} className={"custom-button"} name={"question"}/>
            </button>
            {isOpenModal && (
                <ModalWindow
                    closeWindow={handlerToggleModal}
                    className={"  "}
                >
                    <div className={"bg-[#181818] rounded-[10px] p-3"}>
                        <h1 className={"text-[18px]"}>Кошелек</h1>
                        <p className={"text-[14px] text-[#D7D7D799]/40 leading-[14px]"}>В данном разделе вы можете управлять вашими средствами,
                            выводить / пополнять средства на ваш кошелек</p>
                        <div className={"flex gap-[6px] mt-[12px] w-1/2"}>
                            <Button onClick={handlerToggleModal} className={"!h-[30px] !text-[16px]"}>
                                Ок
                            </Button>
                        </div>
                    </div>
                </ModalWindow>
            )}
        </>
    );
};

export default QuestionWalletModal;