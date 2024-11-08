import React, {useState} from 'react';
import {useTransition} from 'react-spring';
import Icon from "../../components/commons/Icon";
import Tabs from "../../components/commons/Tabs";
import {ItemSnacks, ItemUpgrades} from "../../components/contents/ShopItemsContent";
import QuestionStoreModal from "../../components/ui/modals/QuestionStoreModal";

const Shop = () => {
    const [activeTab, setActiveTab] = useState('snacks');

    const items = {
        snacks: [
            {
                name: 'Килька',
                description: 'Килька — маленькая рыбка из семейства сельдевых.',
                duration: '8 часов',
                reward: '+0.05 TON',
                price: 1,
                image: "/assets/img/fakeFish.png",
            },
            {
                name: 'Бутерброд с икрой',
                description: 'Хрустящий багет с красной икрой.',
                duration: '4 часа',
                reward: '+0.02 TON',
                price: 1,
                image: "/assets/img/fakeFish.png",
            }
        ],
        upgrades: [
            {
                name: 'Фитнес-клуб',
                description: 'После хорошего перекуса, кот Том предпочитает позаниматься в зале!',
                level: '1 lvl',
                interval: 'Раз в 1 час',
                reward: '+0.05 TON',
                price: 1,
                image: "/assets/img/dumbbell.png",
            },
            {
                name: 'Кот Том 2.0',
                description: 'Улучшенная версия кота Тома с большей выносливостью.',
                level: '2 lvl',
                interval: 'Раз в 2 часа',
                reward: '+0.10 TON',
                price: 2,
                image: "/assets/img/dumbbell.png",
            }
        ]
    };
    const snackTransitions = useTransition(activeTab === 'snacks' ? items.snacks : [], {
        key: (item) => item.name,
        from: {opacity: 0, transform: 'translate3d(-100%,0,0)'},
        enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
        leave: {opacity: 0, transform: 'translate3d(-100%,0,0)'},
        trail: 100,
    });

    const upgradeTransitions = useTransition(activeTab === 'upgrades' ? items.upgrades : [], {
        key: (item) => item.name,
        from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
        enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
        leave: {opacity: 0, transform: 'translate3d(100%,0,0)'},
        trail: 100,
    });

    const tabs = [
        {name: 'snacks', label: 'Перекус'},
        {name: 'upgrades', label: 'Улучшения'},
    ];

    return (
        <div className="w-full h-full bg-[#101010] text-white p-[12px]">
            <div className="flex items-center justify-center my-[38px]">
                <div className="flex items-center space-x-2">
                    <Icon width={30} height={30} name={"ton"}/>
                    <div className="flex items-end space-x-2">
                        <span className="text-3xl font-bold">0.00</span>
                        {activeTab === "upgrades" &&
                            <span className="text-[#666666] text-[20px] h-full font-bold">в час</span>}
                    </div>
                </div>
            </div>

            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>

            <div style={{height: 'calc(100vh - 265px)'}}
                 className="scrol-hidden space-y-4 overflow-x-hidden overflow-y-auto">
                {activeTab === 'snacks' && (
                    <div className="flex flex-col space-y-2">
                        {snackTransitions((style, item) => (
                            <ItemSnacks style={style} item={item}/>
                        ))}
                    </div>
                )}

                {activeTab === 'upgrades' && (
                    <div className="flex flex-col space-y-2">
                        {upgradeTransitions((style, item) => (
                            <ItemUpgrades style={style} item={item}/>
                        ))}
                    </div>
                )}
            </div>
            <div className={"absolute top-[20px] right-[20px]"}>
                <QuestionStoreModal/>
            </div>
        </div>
    );
};

export default Shop;
