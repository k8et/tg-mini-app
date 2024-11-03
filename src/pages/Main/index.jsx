import React, {memo, useRef, useState} from 'react';
import cat from "../../assets/img/catMain.png";
import bg from "../../assets/svg/background.svg";
import sun from "../../assets/img/sun.png";
import clouds from "../../assets/gif/clouds.gif";
import gif from "../../assets/gif/cat.gif";
import {useTonAddress} from "@tonconnect/ui-react";
import Icon from "../../components/commons/Icon";
import {Link} from "react-router-dom";
import WalletButton from "../../components/contents/WalletButton";

const iconsData = [
    {time: '13:21', icon: 'fish-icon'},
    {time: '14:30', icon: 'fish-icon'},
    {time: '15:45', icon: 'fish-icon'},
    {time: '15:45', icon: 'fish-icon'},
    {time: '15:45', icon: 'fish-icon'},
    {time: '15:45', icon: 'fish-icon'},
];
const Main = () => {
        const userFriendlyAddress = useTonAddress();
        const [isHovered, setIsHovered] = useState(false);

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
                            className="absolute max-w-[430px] -bottom-[100px] ml-[33px] z-[100]"
                            src={gif}
                            alt="Cat"
                        />
                    ) : (
                        <img
                            className="absolute max-w-[500px] -bottom-[20px] z-[100]  h-auto"
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
                        <Link
                            to={"/question-main"}
                            className={"rounded-[10px] custom-button w-[42px] h-[42px] bg-black flex justify-center items-center"}
                        >
                            <Icon width={25} height={24} className={"custom-button"} name={"question"}/>
                        </Link>
                    </div>
                    {userFriendlyAddress &&
                        <div className={"w-full flex h-auto my-auto  justify-end"}>
                            <div
                                className="relative w-[42px] z-[200]  rounded-[11px] overflow-hidden  h-[294px] flex flex-col gap-[5px] items-center justify-center">
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '20px',
                                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)',
                                        zIndex: 10,
                                        pointerEvents: 'none',
                                        borderRadius: '11px'
                                    }}
                                />

                                <div
                                    className="relative w-full h-full scrol-hidden overflow-y-auto space-y-[5px] z-0"
                                    style={{
                                        height: '294px',
                                        scrollSnapType: 'y mandatory',
                                    }}>
                                    {iconsData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="relative min-h-[70px] w-full"
                                            style={{
                                                scrollSnapAlign: 'start',
                                                minHeight: '70px',
                                            }}>
                                            <Icon width={42} height={57} name={item.icon}/>
                                            <div
                                                className="absolute bottom-[15px] w-full text-white font-[500] text-[12px] flex items-center justify-center gap-[2px]">
                                                <span>+2</span>
                                                <Icon width={9} height={9} name="ton-skeleton"/>
                                            </div>
                                            <div
                                                className="absolute bottom-0 w-full h-[15px] bg-[#2B93A7] text-white font-[500] text-[10px] rounded-b-[119px] flex items-center justify-center">
                                                {item.time}
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '20px',
                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
                                        zIndex: 10,
                                        pointerEvents: 'none',
                                        borderRadius: '11px'
                                    }}
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
