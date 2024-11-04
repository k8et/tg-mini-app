import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";

import Main from "./pages/Main";
import Dish from "./pages/Dish";
import QuestionMain from "./pages/QuestionMain";
import Shop from "./pages/Shop";
import Rewards from "./pages/Rewards";
import Friends from "./pages/Friends";
import Wallet from "./pages/Wallet";
import { useImagePreloader } from "./hooks/useImagePreloader";
import Loader from "./components/commons/Loder";

function App() {
    const { imagesLoaded } = useImagePreloader();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            window.Telegram.WebApp.setHeaderColor("#000000");
            window.Telegram.WebApp.enableClosingConfirmation();
            window.Telegram.WebApp.onEvent('popupClosed', (data) => {
                console.log("Popup was closed", data);
            });
        }

        return () => {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.disableClosingConfirmation();
            }
        };
    }, []);

    useEffect(() => {
        if (imagesLoaded) {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [imagesLoaded]);

    if (!showContent) return <Loader />;

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/dish" element={<Dish />} />
                <Route path="/question-main" element={<QuestionMain />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/wallet" element={<Wallet />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
