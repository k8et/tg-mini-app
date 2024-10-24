import React from 'react';
import cat from "../../assets/svg/cat.svg";
import bg from "../../assets/svg/background.svg";
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import Icon from "../../components/commons/Icon";


const Main = () => {
    const userFriendlyAddress = useTonAddress();

    return (
        <div className="w-screen h-full relative flex items-end justify-center ">
            <div className="z-[999] h-full w-full py-[6px] flex flex-col px-[12px] gap-[6px]">
                <button
                    className={"custom-button w-full py-[16px] max-h-[42px] items-center text-white bg-black flex justify-between px-[22px] rounded-[10px]"}>
                    <span className={"font-[500] text-[14px]"}>Выберите блюдо дня</span>
                    <span className={"font-[500] text-[14px] text-white/75"}>Осталось: 2 часа</span>
                </button>
                <div className={"w-full justify-between  flex h-[42px]"}>
                    {!userFriendlyAddress ?
                        <div className={"relative  custom-button "}>
                            <TonConnectButton/>
                            <button
                                className={"w-full   pointer-events-none text-white text-[14px] font-[500] top-0 h-full absolute bg-black rounded-[10px] "}>
                                Connect
                            </button>
                        </div>
                        :
                        <button className={"min-w-[101px]  flex items-center gap-[8px] text-white justify-center px-[22px] rounded-[10px] bg-black"}>
                            <Icon  width={18} height={18} name={"ton"}/>
                            <span className={"font-[700] text-[14px]"}>0.00</span>
                        </button>
                    }
                    <button
                        className={"rounded-[10px]  custom-button w-[42px] h-[42] bg-black flex justify-center items-center "}>
                        <Icon width={25} height={24} className={"custom-button"} name={"question"}/>
                    </button>
                </div>
            </div>
            <img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="Background"/>
            <img className="absolute -mb-[20px] z-[100] " src={cat} alt="Cat"/>
        </div>
    );
};

export default Main;
