import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TonConnectUIProvider manifestUrl={`${window.location.origin}/tonconnect-manifest.json`}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </TonConnectUIProvider>
    </React.StrictMode>
);
