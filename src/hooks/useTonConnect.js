import { useState } from 'react';


const useTonConnect = () => {
    const [wallet] = useState(() => {
        const savedWallet = localStorage.getItem('ton-connect-ui_wallet-info');
        return savedWallet ? JSON.parse(savedWallet) : null;
    });


    return { wallet };
};

export default useTonConnect;
