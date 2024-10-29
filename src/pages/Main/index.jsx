import React, {useEffect, useRef, useState} from 'react';
import cat from "../../assets/svg/cat.svg";
import bg from "../../assets/svg/background.svg";
import sun from "../../assets/svg/sun.svg";
import clouds from "../../assets/gif/clouds.gif";
import {useTonAddress} from "@tonconnect/ui-react";
import Icon from "../../components/commons/Icon";
import QuestionModal from "../../components/ui/modals/QuestionModal";
import {Link} from "react-router-dom";
import WalletButton from "../../components/contents/WalletButton";

const iconsData = [
    {time: '13:21', icon: 'fish-icon'},
    {time: '14:30', icon: 'fish-icon'},
    {time: '15:45', icon: 'fish-icon'},
    {time: '16:10', icon: 'fish-icon'}
];

const Main = () => {
    const userFriendlyAddress = useTonAddress();
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null); // Ссылка на элемент video
    console.log(isPlaying,"isPlaying")
    const preloadImages = (imageArray) => {
        imageArray.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    useEffect(() => {
        preloadImages([cat, bg, sun, clouds]);
    }, []);

    const handleVideoClick = () => {
        setIsPlaying(true); // Start playing the video
        if (videoRef.current) {
            videoRef.current.play(); // Play the video

            // Set a timeout to pause the video after 3 seconds
            setTimeout(() => {
                videoRef.current.pause();
                setIsPlaying(false); // Update state to indicate the video is not playing
            }, 3000); // 3000 milliseconds = 3 seconds
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
            className={`w-screen h-full relative !z-[100] flex items-end justify-center bg-[#69ABDB]`}>
            {userFriendlyAddress ? (
                <video
                    ref={videoRef}
                    className="absolute  -bottom-[100px] bg-transparent  z-[100] max-w-full h-auto"
                    src="/video/cat.webm"
                    loop
                    muted
                    autoPlay={isPlaying}
                    onClick={handleVideoClick}
                />
            ) : (
                <img
                    width={310}
                    className="absolute -bottom-[20px]  z-[100] max-w-full h-auto"
                    src={cat}
                    alt="Cat"
                />
            )}
            <div className="!z-[99] h-full w-full py-[6px] flex flex-col px-[12px] gap-[6px]">
                <Link
                    to={"/dish"}
                    className={"custom-button w-full py-[16px] max-h-[42px] items-center text-white bg-black flex justify-between px-[22px] rounded-[10px]"}>
                    <span className={"font-[500] text-[14px]"}>Выберите блюдо дня</span>
                    <span className={"font-[500] text-[14px] text-white/75"}>Осталось: 2 часа</span>
                </Link>
                <div className={"w-full justify-between flex h-[42px]"}>
                    <WalletButton/>
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
