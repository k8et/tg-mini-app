import React from 'react';
import cat from "../../assets/svg/cat.svg"
import bg from "../../assets/svg/background.svg"

const Main = () => {
    return (
        <div className=" h-full relative">
            <img className={"absolute"} src={bg} alt="bg"/>
            <img className={"absolute -bottom-[20px] z-[100] left-[7px]"} src={cat} alt="Cat" />
        </div>
    );
};

export default Main;