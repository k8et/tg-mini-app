import React from 'react';
import cat from "../../assets/svg/cat.svg";
import bg from "../../assets/svg/background.svg";
import sun from "../../assets/svg/sun.svg";
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import Icon from "../../components/commons/Icon";
import clouds from "../../assets/gif/clouds.gif";
import QuestionModal from "../../components/ui/modals/QuestionModal";
import {Link} from "react-router-dom";

const iconsData = [
    { time: '13:21', icon: 'fish-icon' },
    { time: '14:30', icon: 'fish-icon' },
    { time: '15:45', icon: 'fish-icon' },
    { time: '16:10', icon: 'fish-icon' }
];

const Main = () => {
    const userFriendlyAddress = useTonAddress();

    return (
        <div className="w-screen h-full relative overflow-hidden flex items-end justify-center bg-[#69ABDB]">
            <img className="absolute inset-0 w-full mt-[35px] h-full object-cover z-[99]" src={bg} alt="Background"/>
            <img className="absolute w-[203px] h-[223px] right-0 top-[0] object-cover z-[99]" src={sun} alt="sun"/>
            <img className="absolute inset-0 w-full h-full object-cover z-[98]" src={clouds} alt="Clouds"/>
            <img className="absolute -mb-[20px] z-[100]" src={cat} alt="Cat"/>
            <div className="!z-[999] h-full w-full py-[6px] flex flex-col px-[12px] gap-[6px]">
                <Link
                    to={"/dish"}
                    className={"custom-button w-full py-[16px] max-h-[42px] items-center text-white bg-black flex justify-between px-[22px] rounded-[10px]"}>
                    <span className={"font-[500] text-[14px]"}>Выберите блюдо дня</span>
                    <span className={"font-[500] text-[14px] text-white/75"}>Осталось: 2 часа</span>
                </Link>
                <div className={"w-full justify-between flex h-[42px]"}>
                    {!userFriendlyAddress ? (
                        <div className={"relative custom-button"}>
                            <TonConnectButton/>
                            <button
                                className={"w-full pointer-events-none text-white text-[14px] font-[500] top-0 h-full absolute bg-black rounded-[10px] "}>
                                Connect
                            </button>
                        </div>
                    ) : (
                        <button
                            className={"min-w-[101px] flex items-center gap-[8px] text-white justify-center px-[22px] rounded-[10px] bg-black"}>
                            <Icon width={18} height={18} name={"ton"}/>
                            <span className={"font-[700] text-[14px]"}>0.00</span>
                        </button>
                    )}
                    <QuestionModal/>
                </div>
                {userFriendlyAddress &&
                    <div className={"w-full flex h-auto my-auto  justify-end"}>
                        <div
                            className={"relative h-auto w-[42px]  flex flex-col gap-[5px] items-center justify-center"}>
                            <div
                                style={{
                                    background: 'linear-gradient(180.22deg, rgba(0, 0, 0, 0.6) 0.19%, rgba(0, 0, 0, 0) 50.51%)'
                                }}
                                className={"absolute inset-0 h-full  rounded-[11px] z-10"}
                            />
                            {iconsData.map((item, index) => (
                                <div key={index} className={"relative h-[70px] z-0 w-full"}>
                                    <Icon width={42} height={57} name={item.icon}/>
                                    <div
                                        className={"w-full bg-[#2B93A7] text-white font-[500] text-[10px] h-[15px] rounded-b-[119px] absolute bottom-[0px] flex items-center justify-center"}>
                                        {item.time}
                                    </div>
                                </div>
                            ))}
                            <div
                                style={{
                                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0.19%, rgba(0, 0, 0, 0) 50.51%)'
                                }}
                                className={"absolute inset-0 h-full  rounded-[11px] z-10"}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
        ;
};

export default Main;
