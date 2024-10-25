import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import useModal from "../../../../hooks/useModal";
import ModalWindow from "../../../commons/ModalWindow";
import Icon from "../../../commons/Icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import screen1 from "../../../../assets/img/screen1.png";
import Button from "../../../commons/Button";

const NextArrow = (props) => {
    const {onClick} = props;
    return (
        <div
            className="absolute hidden top-[00px] right-5 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={onClick}
        >
            <Icon name="arrow-right" width={24} height={24} className="text-white"/>
        </div>
    );
};

const QuestionModal = () => {
    const {isOpenModal, handlerToggleModal} = useModal();
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: false,
        beforeChange: (current, next) => setCurrentSlide(next),
        appendDots: (dots) => (
            <div>
                {currentSlide < slides.length - 1 && (
                    <div className={"!text-white flex gap-[20px] justify-center items-center"}>
                        {React.Children.map(dots, (dot, index) => (
                            <div
                                key={index}
                                className={`bg-[#2F2F2F] rounded-full w-[8px] h-[8px] ${currentSlide === index ? '!bg-[#0098EA]' : ''}`}
                                onClick={() => sliderRef.current.innerSlider.slickGoTo(index)}
                            />
                        ))}
                        <button
                            className={"flex items-center w-[26px] h-[26px] rounded-full bg-white justify-center"}
                            onClick={goToNextSlide}
                        >
                            <Icon name="arrow-right" width={6} height={12} className="text-white"/>
                        </button>
                    </div>
                )}
            </div>
        )
    };

    const slides = [
        {title: "Главное меню", text: "В главном меню у вас есть это и это то и это то и это и это то то"},
        {title: "Блюдо дня", text: "Описание второго слайда"},
        {title: "Кошелек", text: "Описание третьего слайда"},
        {title: "Еда Тома", text: "Описание третьего слайда"},
        {title: "Магазин", text: "Описание третьего слайда"},
        {title: "Друзья", text: "Описание третьего слайда"},
        {title: "Награды", text: "Описание третьего слайда"},
        {title: "Конец!", text: "Описание третьего слайда"},
    ];

    useEffect(() => {
        if (!isOpenModal) {
            setCurrentSlide(0);
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
                    className={"h-screen !w-screen !rounded-none !bg-[#101010] !p-0"}
                >
                    <div className={"my-auto"}>
                        <Slider ref={sliderRef} {...settings}>
                            {slides.map((slide, index) => (
                                <div key={index} className="text-center flex items-center justify-start ">
                                    <h2 className="text-white text-2xl">{slide.title}</h2>
                                    <img
                                        style={{width: 'calc(100vw - 150px)', height: 'auto'}}
                                        className="mx-auto mt-[40px] max-w-[254px] mb-[20px]"
                                        src={screen1}
                                        alt="screen"
                                    />
                                    {currentSlide < slides.length - 1 ?
                                        <p className="text-white/75 max-w-[291px] mx-auto">{slide.text}</p>
                                        :
                                        <Button  onClick={handlerToggleModal} className={"bg-[#0098EA] !mt-[30px] max-w-[121px] mx-auto"}>
                                            Ок
                                        </Button>
                                    }

                                </div>
                            ))}

                        </Slider>
                    </div>
                </ModalWindow>
            )}
        </>
    );
};

export default QuestionModal;
