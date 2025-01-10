import React from 'react';
import Icon from "../../../commons/Icon";
import Button from "../../../commons/Button";
import ModalWindow from "../../../commons/ModalWindow";


const PointsClaimModal = ({handlerToggleModal, isOpenModal}) => {


    return (
        <>
            {isOpenModal &&
                <ModalWindow className={"!bg-transparent"} fromBottom disableBackButton
                             closeWindow={handlerToggleModal}>
                    <div className={"relative bg-transparent h-[315px] justify-center flex items-end"}>
                        <img className={"absolute top-0 z-10"} src="/assets/img/group-ton.png" alt="ton"/>
                        <div
                            style={{
                                background: 'linear-gradient(to top, #151515 0%, #0098EA 170%)',
                            }}
                            className="w-full bg-[#181818] relative items-center text-white rounded-[10px] py-[16px] px-[12px] flex flex-col gap-[6px] ">
                            <h1 className="font-[500] text-[22px] mt-8 leading-6">Ты заработал 100!</h1>
                            <span className="text-white/80 text-[12px]">
                            Заходи каждые N часа, чтобы получить прибыль!
                        </span>
                            <div className={"flex items-center gap-3 my-3"}>
                                <Icon width={34} height={34} name={"ton"}/>
                                <span className={"text-[28px] font-[600]"}>100</span>
                            </div>

                            <div className={"w-full text-center flex flex-col gap-[8px]"}>
                                <Button
                                    className={"!bg-[#0098EA] w-full !text-[16px] text-white !h-[40px]"}
                                    onClick={handlerToggleModal}
                                >
                                    Получить
                                </Button>
                                <span className="text-white/20 text-[12px]">
                        не забудь выбрать блюдо дня!
                        </span>
                            </div>
                        </div>
                    </div>
                </ModalWindow>

            }
        </>
    )
};

export default PointsClaimModal;