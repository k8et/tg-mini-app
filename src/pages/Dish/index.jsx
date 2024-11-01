import React, {useRef, useState} from 'react';
import fishCardBg from "../../assets/img/fishCardBg.png";
import fishCard from "../../assets/img/fishCard.png";
import fish from "../../assets/img/fish.png"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCards} from "swiper/modules";
import Icon from "../../components/commons/Icon";
import Input from "../../components/commons/Input";
import Button from "../../components/commons/Button";
import useForm from "../../hooks/useForm";
import {useSpring, animated} from '@react-spring/web';
import useClickOutside from "../../hooks/useClickOutside";

const slides = [
    {
        title: "Горбуша",
        text: "Это наименьший по размерам и наиболее распространённый и быстрорастущий представитель рода тихоокеанских лососей."
    },
    {
        title: "Горбуша",
        text: "Это наименьший по размерам и наиболее распространённый и быстрорастущий представитель рода тихоокеанских лососей."
    },
    {
        title: "Горбуша",
        text: "Это наименьший по размерам и наиболее распространённый и быстрорастущий представитель рода тихоокеанских лососей."
    },
    {
        title: "Горбуша",
        text: "Это наименьший по размерам и наиболее распространённый и быстрорастущий представитель рода тихоокеанских лососей."
    },
    {
        title: "Горбуша",
        text: "Это наименьший по размерам и наиболее распространённый и быстрорастущий представитель рода тихоокеанских лососей."
    },
];

const initialForm = {sum: ""};
const validation = {sum: {isRequired: ''}};

const Dish = () => {
    const {form, errors, handlerSubmit, handlerChange, isValid} = useForm({
        data: initialForm,
        validation,
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    let swiperRef = useRef(null);
    const modalRef = useRef(null);

    useClickOutside(modalRef, () => setIsModalVisible(false));

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handlerToggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const modalSpring = useSpring({
        transform: isModalVisible ? 'translateY(0%)' : 'translateY(100%)',
        config: {tension: 280, friction: 40},
    });



    return (
        <div
            style={{
                backgroundImage: `url('${fishCardBg}')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            className={`w-screen h-full relative flex overflow-x-hidden  items-end justify-center bg-[#101010] `}>
            <div
                className="z-[900] pt-[30px] pb-[5px] h-full    w-full flex flex-col justify-center px-[12px] gap-[6px]">
                <h1 className="font-[700] text-white text-[22px] text-center">
                    Выберите ваше <br/><span className="text-[#0098EA]">блюдо</span> дня!
                </h1>
                <div className="my-auto relative">
                    <Swiper
                        navigation={false}
                        effect={"cards"}
                        grabCursor={true}
                        onSlideChange={handleSlideChange}
                        modules={[EffectCards]}
                        className="w-[230px] h-[360px]"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="border  border-white rounded-[20px]">
                                <div
                                    style={{
                                        backgroundImage: `url('${fishCard}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'
                                    }}
                                    className="text-center justify-between bg-[#151515] h-full flex flex-col px-[20px] py-[10px] items-center">
                                    <h2 className="text-white text-[16px] font-[500] w-full text-left">{slide.title}</h2>
                                    <img alt={"error"} src={fish} className={" "}/>
                                    <p className="text-[#D7D7D7] leading-[14px] font-[300] text-[12px]">{slide.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className={"flex items-center w-[26px] h-[26px] rounded-full bg-white justify-center absolute left-2 top-1/2 transform -translate-y-1/2"}
                        onClick={handlePrevClick}
                    >
                        <Icon name="arrow-right" width={6} height={12} className="text-white rotate-180"/>
                    </button>
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center w-[26px] h-[26px] rounded-full bg-white justify-center"
                        onClick={handleNextClick}
                    >
                        <Icon name="arrow-right" width={6} height={12} className="text-white"/>
                    </button>
                    <div className="flex justify-center mx-auto bottom-0 space-x-2 mt-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`bg-[#2F2F2F] rounded-full w-[8px] h-[8px] ${currentIndex === index ? '!bg-[#0098EA]' : ''}`}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    swiperRef.current.slideTo(index);
                                }}
                            />
                        ))}
                    </div>
                </div>
                <Button onClick={handlerToggleModal}>Выбрать</Button>

                {isModalVisible && (
                    <div className={"fixed top-0 right-0 h-full z-[999] flex w-full  items-center px-3"}>
                        <animated.div
                            ref={modalRef}
                            style={modalSpring}
                            className="w-full bg-[#181818] text-white rounded-[10px] py-[16px] px-[12px] flex flex-col gap-[6px] z-50">
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
                        </animated.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dish;

