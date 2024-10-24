import React, { useEffect, useState } from 'react';
import tonConnect from "../../../tonConnect";

const TonConnectButton = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [address, setAddress] = useState('');

    useEffect(() => {
        const unsubscribe = tonConnect.onStatusChange((wallet) => {
            if (wallet) {
                setWalletConnected(true);
                setAddress(wallet.account.address);
            } else {
                setWalletConnected(false);
                setAddress('');
            }
        });

        return () => unsubscribe();
    }, []);

    const connectWallet = async () => {
        try {
            await tonConnect.connect();
        } catch (error) {
            console.error('Ошибка подключения:', error);
        }
    };

    const disconnectWallet = async () => {
        try {
            tonConnect.disconnect();
        } catch (error) {
            console.error('Ошибка отключения:', error);
        }
    };

    return (
        <div>
            {walletConnected ? (
                <div>
                    <p>Подключен к кошельку: {address}</p>
                    <button onClick={disconnectWallet}>Отключить кошелек</button>
                </div>
            ) : (
                <button onClick={connectWallet}>Подключить кошелек</button>
            )}
        </div>
    );
};

export default TonConnectButton;
