import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Icon from "../../commons/Icon";

const NavBar = () => {
    const location = useLocation();

    const buttons = [
        {name: 'home', label: 'Главная', path: '/'},
        {name: 'store', label: 'Магазин', path: '/shop'},
        {name: 'friends', label: 'Друзья', path: '/friends'},
        {name: 'rewards', label: 'Награды', path: '/rewards'}
    ];

    const isRewardsActive = location.pathname === '/rewards' || location.pathname === '/dish';

    return (
        <div className="h-[82px] w-full bg-black p-[10px] flex gap-[10px] z-[99]">
            {buttons.map((button) => (
                <Link
                    to={button.path}
                    key={button.name}
                    className={`p-[10px] w-full flex items-center gap-[3px] flex-col justify-center font-[500] rounded-[10px] 
                    ${location.pathname === button.path || (button.name === 'rewards' && isRewardsActive) ? 'bg-primary' : ''}`}
                >
                    <Icon
                        className={location.pathname === button.path || (button.name === 'rewards' && isRewardsActive) ? 'text-white' : 'text-white/20'}
                        width={27}
                        height={18}
                        name={button.name}/>
                    <span
                        className={` text-[12px] ${location.pathname === button.path || (button.name === 'rewards' && isRewardsActive) ? 'text-white' : 'text-white/20'}`}>
                        {button.label}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
