import React from 'react';
import useForm from "../../../../hooks/useForm";
import Icon from "../../../commons/Icon";
import Button from "../../../commons/Button";
import ModalWindow from "../../../commons/ModalWindow";
import Input from "../../../commons/Input";

const initialForm = {sum: ""};
const validation = {sum: {isRequired: ''}};


const DishChoseModal = ({handlerToggleModal}) => {

    const {form, errors, handlerSubmit, handlerChange, isValid} = useForm({
        data: initialForm,
        validation,
    });

    return (
        <>
            <ModalWindow disableBackButton closeWindow={handlerToggleModal}>
                <div
                    className="w-full bg-[#181818] text-white rounded-[10px] py-[16px] px-[12px] flex flex-col gap-[6px] ">
                    <h1 className="font-[500] text-[18px]">Подтвердите выбор</h1>
                    <div className="flex items-center gap-1">
                        Баланс:
                        <span className="flex items-center gap-1">
                                <Icon width={12} height={12} name={"ton"}/>
                                0.00
                            </span>
                    </div>
                    <Input
                        className="mt-[5px] h-[40px] placeholder:!text-[14px] !text-[14px]"
                        type="number"
                        error={errors.sum}
                        onChange={handlerChange}
                        value={form.sum}
                        name="sum"
                        placeholder="Укажите сумму ставки"
                    />
                    <div className="flex w-full mt-[10px] gap-[6px]">
                        <Button
                            className={(!isValid || form.sum.length === 0) ? "!bg-[#1D1D1D] !text-[16px] text-white !h-[40px]" : " text-white !h-[40px] !text-[16px]"}
                            disabled={!isValid}
                            onClick={handlerSubmit}
                        >
                            Сделать ставку
                        </Button>
                        <Button className="bg-[#1D1D1D] !text-[16px]" onClick={handlerToggleModal}>
                            Отмена
                        </Button>
                    </div>
                </div>
            </ModalWindow>
        </>
    )
};

export default DishChoseModal;