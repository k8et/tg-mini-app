import React from "react";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../commons/Button";
import Input from "../../../commons/Input";
import useForm from "../../../../hooks/useForm";
import Icon from "../../../commons/Icon";

const initialForm = {
    sum: ""
}
const validation = {
    sum: {isRequired: ''},
}

const ChoseDishModal = () => {
    const {isOpenModal, handlerToggleModal} = useModal();

    const {form, errors, handlerSubmit, handlerChange, isValid} = useForm(
        {
            data: initialForm,
            validation,
            onSubmit
        }
    )

    function onSubmit(form) {
    }

    const buttonClass = (!isValid || form.sum.length === 0) ? "!bg-[#1D1D1D] !text-[12px] text-white" : " text-white !text-[12px]";

    return (
        <>
            <Button onClick={handlerToggleModal}>
                Выбрать
            </Button>
            {isOpenModal && (
                <ModalWindow
                    closeWindow={handlerToggleModal}
                    className={"h-screen !w-screen !rounded-none !bg-[#101010] !p-0 !px-[12px]"}
                >
                    <div
                        className={"my-auto w-full !bg-[#181818] rounded-[10px] py-[16px] px-[12px] flex flex-col gap-[6px]"}>

                        <h1 className={"font-[500] text-[16px]"}>Подтвердите выбор</h1>
                        <div className={"flex items-center gap-1"}>
                            Баланс:
                            <span className={"flex items-center gap-1"}>
                                <Icon width={12} height={12} name={"ton"}/>
                                0.00
                            </span>
                        </div>
                        <Input
                            className={"mt-[5px]"}
                            type="number"
                            error={errors.sum} onChange={handlerChange} value={form.sum} name="sum"
                            placeholder={"Укажите сумму ставки"}
                        />
                        <div className={"flex w-full gap-[6px]"}>
                            <Button
                                className={buttonClass}
                                disabled={!isValid}
                                onClick={handlerSubmit}
                            >
                                Сделать ставку
                            </Button>
                            <Button className={"bg-[#1D1D1D] !text-[12px]"} onClick={handlerToggleModal}>
                                Отмена
                            </Button>
                        </div>
                    </div>
                </ModalWindow>
            )}
        </>
    );
};

export default ChoseDishModal;
