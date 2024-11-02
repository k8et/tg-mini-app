import React, {useState} from 'react';
import Icon from "../../components/commons/Icon";
import Tabs from "../../components/commons/Tabs";
import Input from "../../components/commons/Input";
import Button from "../../components/commons/Button";
import WalletItem from "../../components/contents/WalletItemContent";
import AcceptModal from "../../components/ui/modals/AcceptModal";
import QuestionWalletModal from "../../components/ui/modals/QuestionWalletModal";
import useBackButtonTg from "../../hooks/useBackButtonTg";

const Wallet = () => {
    const [activeTab, setActiveTab] = useState('topup');

    useBackButtonTg(() => {});

    const fakeData = Array.from({length: 10}, (_, index) => ({
        date: '01.01.2024',
        time: '13:21',
        amount: `+${10 + index * 5} TON`,
    }));
    const tabs = [
        {name: 'topup', label: 'Пополнения'},
        {name: 'withdraw', label: 'Вывод'},
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



            {activeTab === "withdraw" &&
                <>
                    <div
                        className={"bg-[#151515] w-full h-auto rounded-[10px] py-[16px] px-[12px] gap-[12px] flex flex-col"}>
                        <Input className={"!bg-[#101010] !h-[40px]"} placeholder={"Введите сумму..."}
                               label={"Вывод баланса"} value={""} name={""}/>
                        <AcceptModal>
                            <Button type={"button"}>Вывести</Button>
                        </AcceptModal>
                    </div>
                    <div style={{height: 'calc(100vh - 416px)'}}
                         className="scrol-hidden bg-[#151515] rounded-[10px] py-[16px] px-[12px] mt-[12px] space-y-4 overflow-x-hidden overflow-y-auto">
                        <div className="flex flex-col space-y-2 ">
                            <label className={"text-[12px] font-[400] text-[#D7D7D766]/40"}>История выводов</label>
                            {fakeData.map((item, index) => (
                                <WalletItem
                                    key={index}
                                    date={item.date}
                                    time={item.time}
                                    amount={item.amount}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </>

            }

            {activeTab === "topup" &&
                <>
                    <div
                        className={"bg-[#151515] w-full h-auto rounded-[10px] py-[16px] px-[12px] gap-[12px] flex flex-col"}>
                        <Input className={"!bg-[#101010] !h-[40px]"} placeholder={"Введите сумму..."}
                               label={"Пополнение баланса"} value={""} name={""}/>
                        <AcceptModal>
                            <Button type={"button"}>Пополнить</Button>
                        </AcceptModal>
                    </div>
                    <div style={{height: 'calc(100vh - 416px)'}}
                         className="scrol-hidden bg-[#151515] rounded-[10px] py-[16px] px-[12px] mt-[12px] space-y-4 overflow-x-hidden overflow-y-auto">
                        <div className="flex flex-col space-y-2 ">
                            <label className={"text-[12px] font-[400] text-[#D7D7D766]/40"}>История пополнений</label>
                            {fakeData.map((item, index) => (
                                <WalletItem
                                    key={index}
                                    date={item.date}
                                    time={item.time}
                                    amount={item.amount}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </>
            }
            <div className={"absolute top-[20px] right-[20px]"}>
                <QuestionWalletModal/>
            </div>
        </div>
    );
};

export default Wallet;
