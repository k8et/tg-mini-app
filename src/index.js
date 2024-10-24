import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TonConnectUIProvider
            manifestUrl={`${window.location.origin}/tonconnect-manifest.json`}
            uiConfig={{
                button: {
                    theme: "dark",
                    style: {
                        backgroundColor: "#000",
                        color: "#fff",
                        borderRadius: "10px",
                        padding: "16px 22px",
                    },
                }
            }}
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </TonConnectUIProvider>
    </React.StrictMode>
);
