import React from 'react';
import cat from "../../assets/svg/cat.svg";
import bg from "../../assets/svg/background.svg";
import {TonConnectButton} from "@tonconnect/ui-react";
import Icon from "../../components/commons/Icon";

const Main = () => {
    return (
        <div className="w-screen h-full relative flex items-end justify-center ">
            <div className="z-[999] h-full w-full py-[6px] flex flex-col px-[12px] gap-[6px]">
                <button className={" custom-button w-full py-[16px] max-h-[42px] items-center text-white bg-black flex justify-between px-[22px] rounded-[10px]"}>
                    <span>Выберите блюдо дня</span>
                    <span>Осталось: 2 часа</span>
                </button>
                <div className={"w-full justify-between  flex max-h-[42px]"}>
                    <TonConnectButton  />
                    <button className={"rounded-[10px] custom-button w-[42px] h-[42] bg-black flex justify-center items-center "}>
                        <Icon width={25} height={24} className={"custom-button"} name={"question"} />
                    </button>
                </div>
            </div>
            <img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="Background"/>
            <img className="absolute -mb-[20px] z-[100] " src={cat} alt="Cat"/>
        </div>
    );
};

export default Main;
