import React from 'react';
import Button from "../../components/commons/Button";
import {useNavigate} from "react-router-dom";

const ResultSection = ({isBlue, dishes, style}) => {
    const navigate = useNavigate();
    return (
        <div className="mb-4 rounded-[20px] overflow-hidden" style={style}>
            <div className="p-4">
                <h3 className="text-[16px] mb-6">Ваш выбор: Блюдо</h3>

                <div className="space-y-4">
                    {dishes.map((dish, index) => (
                        <div key={index}>
                            <div className="mb-2 flex items-center bg-[#1D1D1D] py-[8px] px-[13px] rounded-[10px] ">
                                <span className="text-[14px] w-[90px]">{dish.name} {dish.percentage}%</span>
                                <div className="flex-1 h-[8px] bg-[#1D1D1D] rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${
                                            isBlue ? 'bg-[#0098EA]' : 'bg-[#FF9898]'
                                        }`}
                                        style={{width: `${dish.percentage}%`}}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-[12px] mt-6 text-[#D7D7D7]">
                    Сегодня кот Том решил отведать Блюдо
                </p>

                <div className="mt-4 w-[123px]">
                    {isBlue ? (
                        <Button onClick={() => navigate("/")}
                                className=" bg-[#0098EA] w-auto px-6 whitespace-nowrap text-white py-[8px] font-[500] rounded-xl !text-[12px]">
                            Получить N TON
                        </Button>
                    ) : (
                        <Button
                            nClick={() => navigate("/")}
                            className="bg-[#FF9898] w-auto px-6 text-white py-[8px] font-[500]  rounded-xl !text-[12px]">
                            Ok
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
};

const VotingResultsPage = () => {
    const dishes = [
        {name: 'Блюдо', percentage: 60},
        {name: 'Блюдо', percentage: 30},
        {name: 'Блюдо', percentage: 100}
    ];

    return (
        <div className="min-h-screen bg-[#101010] p-4 text-white">
            <h2 className="text-[22px] font-medium mb-4">Результаты выбора блюда</h2>

            <ResultSection
                isBlue={true}
                dishes={dishes}
                style={{
                    backgroundImage: 'url("/assets/img/blue-gradient.png")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <ResultSection
                isBlue={false}
                dishes={dishes}
                style={{
                    backgroundImage: 'url("/assets/img/pink-gradient.png")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />
        </div>
    );
};

export default VotingResultsPage;