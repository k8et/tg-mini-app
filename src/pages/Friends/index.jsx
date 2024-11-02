import React from 'react';
import bg from "../../assets/img/bg-friend.png";
import FriendItem from "../../components/contents/FriendsItemsContent";
import CopyButton from "../../components/commons/CopyButton";

const Friends = () => {
    const fakeData = [
        { year: "2019", username: "@pustoy_lzt", points: 10 },
        { year: "2020", username: "@example_user", points: 20 },
        { year: "2021", username: "@another_user", points: 15 },
    ];
    const handleInviteFriend = () => {
        const inviteMessage = "Привет! Приглашаю тебя присоединиться ко мне! Получай 15% от дохода друзей.";
        const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(inviteMessage)}`;

        window.Telegram.WebApp.openTelegramLink(telegramLink);
    };


    return (
        <div
            className="w-full h-full bg-[#101010] text-white p-[12px] bg-no-repeat"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'top left',
                backgroundSize: 'cover'
            }}
        >
            <div className="flex items-center justify-center my-[38px]">
                <div className="flex items-center space-x-2">
                    <h1 className="font-[700] text-[22px]">
                        Получай <span className="text-[#44BDFF]">15%</span> от <br />
                        дохода друзей
                    </h1>
                </div>
            </div>
            <div className="w-full h-[63px] bg-[#151515] rounded-[10px] flex px-[16px] items-center justify-center">
                <div className="h-[32px] w-full gap-[6px] flex">
                    <button
                        className="h-full w-full bg-[#0098EA] rounded-[10px] font-[400]"
                        onClick={handleInviteFriend}
                    >
                        Пригласить друга
                    </button>
                    <CopyButton textToCopy="@mmxmhmcf_bot" />
                </div>
            </div>
            <div style={{ height: 'calc(100vh - 315px)' }}
                 className="scroll-hidden space-y-[6px] overflow-x-hidden mt-[6px] overflow-y-auto">
                {fakeData.map((item, index) => (
                    <FriendItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Friends;
