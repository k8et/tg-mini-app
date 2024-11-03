import React, {Suspense, lazy, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout";
import useImagePreloader from "./hooks/useImagePreloader";
import cat from "./assets/img/catMain.png";
import bg from "./assets/svg/background.svg";
import sun from "./assets/img/sun.png";
import clouds from "./assets/gif/clouds.gif";
import gif from "./assets/gif/cat.gif";
import Loader from "./components/commons/Loder";

const Main = lazy(() => import("./pages/Main"));
const QuestionMain = lazy(() => import("./pages/QuestionMain"));
const Dish = lazy(() => import("./pages/Dish"));
const Shop = lazy(() => import("./pages/Shop"));
const Friends = lazy(() => import("./pages/Friends"));
const Rewards = lazy(() => import("./pages/Rewards"));
const Wallet = lazy(() => import("./pages/Wallet"));

function App() {
    const [isLoading, setIsLoading] = useState(true);
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
    const imagesToPreload = [
        cat,
        bg,
        sun,
        clouds,
        gif
    ];
    useImagePreloader(imagesToPreload).then(() => {
        setIsLoading(false);
    });

    if (isLoading) return <Loader />

    return (
        <MainLayout>
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/dish" element={<Dish/>}/>
                    <Route path="/question-main" element={<QuestionMain/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/rewards" element={<Rewards/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                </Routes>
            </Suspense>
        </MainLayout>
    );
}

export default App;
