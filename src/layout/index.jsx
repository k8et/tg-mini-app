import React from 'react';
import NavBar from "../components/ui/NavBar";

const MainLayout = (props) => {
    const {children} = props

    return (
        <nav className={'h-screen bg-green-500 flex flex-col justify-between'}>
            <div></div>
            <div>
                {children}
            </div>
            <NavBar/>
        </nav>
    );
};

export default MainLayout;