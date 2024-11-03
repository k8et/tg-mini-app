import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

import "swiper/css/bundle";
import ImagePreloader from "./hooks/useImagePreloader";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TonConnectUIProvider
            // defaultNetwork="testnet"
            manifestUrl={`https://tg-mini-app-ilfx.vercel.app/tonconnect-manifest.json`}>
            <BrowserRouter>
                <ImagePreloader>
                    <App/>
                </ImagePreloader>
            </BrowserRouter>
        </TonConnectUIProvider>
    </React.StrictMode>
);
