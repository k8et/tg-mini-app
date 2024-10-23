import React from 'react';
import Footer from "../components/ui";

const MainLayout = (props) => {
    const {children} = props

    return (
        <div className={'h-screen bg-green-500 flex flex-col justify-between'}>
            <div></div>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;