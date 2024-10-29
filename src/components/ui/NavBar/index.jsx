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
    const isHomeActive = location.pathname === '/' || location.pathname === '/wallet';

    return (
        <div className="h-[82px] w-full bg-black p-[10px] flex gap-[10px] ">
            {buttons.map((button) => (
                <Link
                    to={button.path}
                    key={button.name}
                    className={`p-[10px] w-full z-[800] flex items-center gap-[3px] flex-col justify-center font-[500] rounded-[10px] 
                    ${location.pathname === button.path || (button.name === 'rewards' && isRewardsActive) || (button.name === 'home' && isHomeActive) ? 'bg-primary' : ''}`}
                >
                    <Icon
                        className={location.pathname === button.path || (button.name === 'rewards' && isRewardsActive) || (button.name === 'home' && isHomeActive) ? 'text-white' : 'text-white/20'}
                        width={27}
                        height={18}
                        name={button.name}/>
                    <span
                        className={` text-[12px] ${location.pathname === button.path || (button.name === 'rewards' && isRewardsActive) || (button.name === 'home' && isHomeActive) ? 'text-white' : 'text-white/20'}`}>
                        {button.label}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
