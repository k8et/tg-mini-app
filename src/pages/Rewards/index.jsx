import React from 'react';
import RewardsItemsContent from "../../components/contents/RewardsItemsContent";

const Rewards = () => {
    const fakeData = [
        {description: "Подписаться\n" +
                "на Telegram канал", points: 10},
        {description: "Подписаться\n" +
                "на Telegram канал", points: 20},
        {description: "Подписаться\n" +
                "на Telegram канал", points: 20},
        {description: "Подписаться\n" +
                "на Telegram канал", points: 20},
        {description: "Подписаться\n" +
                "на Telegram канал", points: 20},
        {description: "Подписаться\n" +
                "на Telegram канал", points: 20},
        {description: "Подписаться\n" +
                "на Telegram канал", points: 15},
    ];

    return (
        <div
            className="w-full h-full bg-[#101010] text-white p-[12px] bg-no-repeat"
            style={{
                backgroundImage: `url("/assets/img/bg-rewars.png")`,
                backgroundPosition: 'top left',
                backgroundSize: 'cover'
            }}
        >
            <div className="flex items-center justify-center my-[38px]">
                <div className="flex items-center space-x-2">
                    <h1 className={"font-[700] text-[36px]"}>
                        3/5
                    </h1>
                </div>
            </div>
            <div className={"h-[32px] w-full gap-[6px] flex"}>
                <button className={"h-full w-full bg-[#0098EA] rounded-[10px] font-[400]"}>Ежедневные</button>
            </div>
            <div style={{height: 'calc(100vh - 280px)'}}
                 className="scrol-hidden space-y-[6px] overflow-x-hidden mt-[6px] overflow-y-auto">
                {fakeData.map((item, index) => (
                    <RewardsItemsContent key={index} item={item} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default Rewards;
