import React, {useEffect, useState, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import Icon from "../../../commons/Icon";
import "swiper/swiper-bundle.css";
import screen1 from "../../../../assets/img/screen1.png";
import {Navigation} from "swiper/modules";

const QuestionModal = () => {
    const {isOpenModal, handlerToggleModal} = useModal();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLastSlideViewed, setIsLastSlideViewed] = useState(false);
    let swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);

        if (swiper.activeIndex === slides.length - 1) {
            setIsLastSlideViewed(true);
        } else {
            setIsLastSlideViewed(false);
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const slides = [
        {title: "Главное меню", text: "Описание первого слайда"},
        {title: "Блюдо дня", text: "Описание второго слайда"},
        {title: "Кошелек", text: "Описание третьего слайда"},
        {title: "Еда Тома", text: "Описание четвертого слайда"},
        {title: "Магазин", text: "Описание пятого слайда"},
        {title: "Друзья", text: "Описание шестого слайда"},
        {title: "Награды", text: "Описание седьмого слайда"},
        {title: "Конец!", text: "Описание восьмого слайда"},
    ];

    useEffect(() => {
        if (!isOpenModal) {
            setCurrentSlide(0);
            setIsLastSlideViewed(false);
        }
    }, [isOpenModal]);

    return (
        <>
            <button
                onClick={handlerToggleModal}
                className={"rounded-[10px] custom-button w-[42px] h-[42px] bg-black flex justify-center items-center"}
            >
                <Icon width={25} height={24} className={"custom-button"} name={"question"}/>
            </button>

            {isOpenModal && (
                <ModalWindow
                    closeWindow={handlerToggleModal}
                    className={"h-screen !w-screen !rounded-none !bg-[#101010] !z-[9999] !p-0"}
                >
                    <div className={"my-auto"}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="text-center flex flex-col items-center">
                                    <h2 className="text-white text-2xl">{slide.title}</h2>
                                    <img
                                        style={{width: 'calc(100vw - 150px)', height: 'auto'}}
                                        className="mx-auto mt-[40px] max-w-[254px] mb-[20px]"
                                        src={screen1}
                                        alt="screen"
                                    />
                                    <p className="text-white/75 max-w-[291px] mx-auto">{slide.text}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="flex justify-center mx-auto bottom-0 items-center mt-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`bg-[#2F2F2F] rounded-full ml-[8px] w-[8px] h-[8px] ${currentSlide === index ? '!bg-[#0098EA]' : ''}`}
                                    onClick={() => {
                                        if (swiperRef.current && typeof swiperRef.current.slideTo === 'function') {
                                            swiperRef.current.slideTo(index);
                                        } else {
                                            console.error('swiperRef.current is not initialized or slideTo is not a function');
                                        }
                                    }}
                                />
                            ))}
                            <button
                                className={"w-[22px] h-[22px] ml-[10px] bg-white rounded-full flex items-center justify-center"}
                                onClick={handleNextClick}>
                                <Icon width={12} height={12} name={"arrow-right"}/>
                            </button>
                        </div>

                        {isLastSlideViewed && (
                            <div className={" absolute top-0 right-4 flex mt-3 justify-center"}>
                                <button
                                    onClick={handlerToggleModal}
                                >
                                    <button onClick={handlerToggleModal} className="absolute top-1 right-1">
                                        <Icon width={28} height={28} name={"close"} />
                                    </button>

                                </button>
                            </div>
                        )}
                    </div>
                </ModalWindow>
            )}
        </>
    );
};

export default QuestionModal;
