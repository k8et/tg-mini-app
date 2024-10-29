import React from 'react';
import NavBar from "../components/ui/NavBar";

const MainLayout = (props) => {
    const {children} = props

    return (
        <nav className={'h-screen bg-black overflow-hidden flex flex-col justify-between'}>
            <div></div>
            <div className={"h-full "}>
                {children}
            </div>
            <NavBar/>
        </nav>
    );
};

export default MainLayout;