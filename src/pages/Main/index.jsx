import React from 'react';
import cat from "../../assets/svg/cat.svg";
import bg from "../../assets/svg/background.svg";

const Main = () => {
    return (
        <div className="w-screen h-full relative flex items-end justify-center ">
            <img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="Background"/>
            <img className="absolute -mb-[20px] z-[100] " src={cat} alt="Cat"/>
        </div>
    );
};

export default Main;
