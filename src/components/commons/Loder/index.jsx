import React from 'react';
import Icon from "../Icon";

const Loader = () => {
    return (
        <div
            className="absolute overflow-hidden w-screen h-screen flex flex-col items-start bg-[#101010] justify-start z-50 py-[16px] px-[12px]">
            <h1 className="text-[18px] text-white mb-5">Roadmap</h1>
            <div className="w-full  space-y-[6px] text-[14px] text-[#D7D7D7]">
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"check"}/>
                    <span>Basic game</span>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"check"}/>
                    <span>Staking</span>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"check"}/>
                    <span>Referal</span>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"check"}/>
                    <span>Rewards </span>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"check"}/>
                    <span>Social competition</span>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"fire"}/>
                    <span>Presale</span>
                    <Icon className={"absolute right-[24px]"} width={34} height={16} name={"next"}/>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"lock"}/>
                    <span>Listing CEX/DEX</span>
                    <Icon className={"absolute right-[24px]"} width={34} height={16} name={"soon"}/>
                </div>
                <div className="flex items-center justify-center p-2  rounded-full bg-[#181818]">
                    <Icon className={"absolute left-[24px]"} width={16} height={16} name={"lock"}/>
                    <span>Add new token</span>
                    <Icon className={"absolute right-[24px]"} width={34} height={16} name={"soon"}/>
                </div>
            </div>
            <div className={"absolute bottom-12 gap-1 w-full flex flex-col items-center justify-center  "}>
                <span className={"text-[12px] text-white font-[400]"}>Loading...</span>
                <Icon className={"spin mr-2"} width={14} height={14} name={"loading"}/>
            </div>
        </div>
    );
};

export default Loader;
