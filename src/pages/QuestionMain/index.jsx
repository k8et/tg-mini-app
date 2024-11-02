import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import screen1 from '../../assets/img/screen1.png';
import Icon from '../../components/commons/Icon';
import { Link } from 'react-router-dom';
import useBackButtonTg from "../../hooks/useBackButtonTg";

const QuestionMain = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLastSlideViewed, setIsLastSlideViewed] = useState(false);
    let swiperRef = useRef(null);

    useBackButtonTg();

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
        { title: 'Главное меню', text: 'Описание первого слайда' },
        { title: 'Блюдо дня', text: 'Описание второго слайда' },
        { title: 'Кошелек', text: 'Описание третьего слайда' },
        { title: 'Еда Тома', text: 'Описание четвертого слайда' },
        { title: 'Магазин', text: 'Описание пятого слайда' },
        { title: 'Друзья', text: 'Описание шестого слайда' },
        { title: 'Награды', text: 'Описание седьмого слайда' },
        { title: 'Конец!', text: 'Описание восьмого слайда' },
    ];


    return (
        <div className="w-full h-full absolute z-[999] bg-[#101010] flex items-center justify-center">
            <div className="w-full">
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
                                className="mx-auto mt-[40px] mb-[20px] max-w-full h-[50vh] object-contain"
                                src={screen1}
                                alt="screen"
                            />
                            <p className="text-white/75 max-w-[291px] mx-auto">{slide.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center items-center mt-4">
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
                        className="w-[22px] h-[22px] ml-[10px] bg-white rounded-full flex items-center justify-center"
                        onClick={handleNextClick}
                    >
                        <Icon width={12} height={12} name="arrow-right" />
                    </button>
                </div>

                {isLastSlideViewed && (
                    <div className="absolute top-0 right-4 flex mt-3 justify-center">
                        <Link to="/">
                            <button className="absolute top-1 right-1">
                                <Icon width={28} height={28} name="close" />
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionMain;
