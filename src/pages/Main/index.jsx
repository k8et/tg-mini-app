import React, {memo, useState} from 'react';
import cat from "../../assets/img/catMain.png";
import bg from "../../assets/svg/background.svg";
import sun from "../../assets/img/sun.png";
import clouds from "../../assets/gif/clouds.gif";
import gif from "../../assets/gif/cat.gif";
import {useTonAddress} from "@tonconnect/ui-react";
import Icon from "../../components/commons/Icon";
import QuestionModal from "../../components/ui/modals/QuestionModal";
import {Link} from "react-router-dom";
import WalletButton from "../../components/contents/WalletButton";
import useImagePreloader from "../../hooks/useImagePreloader";

const iconsData = [
    {time: '13:21', icon: 'fish-icon'},
    {time: '14:30', icon: 'fish-icon'},
    {time: '15:45', icon: 'fish-icon'},
    {time: '16:10', icon: 'fish-icon'}
];
const Main = () => {
        const userFriendlyAddress = useTonAddress();
        const [isHovered, setIsHovered] = useState(false);
        useImagePreloader([cat, bg, sun, clouds, gif]);

        const handleHover = () => {
            if (!isHovered) {
                setIsHovered(true);
                setTimeout(() => {
                    setIsHovered(false);
                }, 3000);
            }
        };


        return (
            <div
                style={{
                    backgroundColor: '#69ABDB',
                    backgroundImage: `
            url('${bg}'),     
            url('${sun}'),    
            url('${clouds}')   
        `,
                    backgroundPosition: 'center top 0px, right top, right top 20px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover, 203px 223px, cover'
                }}
                className={`w-screen h-full relative  flex items-end justify-center bg-[#69ABDB]`}>
                {
                    isHovered ? (
                        <img
                            className="absolute -bottom-[100px] ml-[30px] z-[100]"
                            src={gif}
                            alt="Cat"
                        />
                    ) : (
                        <img
                            width={330}
                            className="absolute -bottom-[20px] z-[100] max-w-full h-auto"
                            src={cat}
                            onClick={handleHover}
                            alt="Cat"
                        />
                    )}

                <div className=" h-full w-full py-[6px] flex flex-col px-[12px] gap-[6px]">
                    <Link
                        to={"/dish"}
                        className={"custom-button z-[800] w-full py-[16px] max-h-[42px] items-center text-white bg-black flex justify-between px-[22px] rounded-[10px]"}>
                        <span className={"font-[500] text-[14px]"}>Выберите блюдо дня</span>
                        <span className={"font-[500] text-[14px] text-white/75"}>Осталось: 2 часа</span>
                    </Link>
                    <div className={"w-full z-[800] justify-between flex h-[42px]"}>
                        <WalletButton/>
                        <QuestionModal/>
                    </div>
                    {userFriendlyAddress &&
                        <div className={"w-full flex h-auto my-auto  justify-end"}>
                            <div
                                className={"relative h-auto w-[42px] z-[200]  flex flex-col gap-[5px] items-center justify-center"}>
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
        );
    }
;

export default memo(Main);
