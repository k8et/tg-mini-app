import React, {Suspense, lazy, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout";

const Main = lazy(() => import("./pages/Main"));
const QuestionMain = lazy(() => import("./pages/QuestionMain"));
const Dish = lazy(() => import("./pages/Dish"));
const Shop = lazy(() => import("./pages/Shop"));
const Friends = lazy(() => import("./pages/Friends"));
const Rewards = lazy(() => import("./pages/Rewards"));
const Wallet = lazy(() => import("./pages/Wallet"));

function App() {
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            window.Telegram.WebApp.setHeaderColor('#000000');
        }

        const handleBeforeUnload = (event) => {
            window.Telegram.WebApp.showConfirm(
                "Changes that you made may not be saved.",
                (result) => {
                    if (!result) {
                        event.preventDefault(); // Отмена закрытия, если пользователь выбрал "Cancel"
                    } else {
                        console.log("Confirmed");
                    }
                }
            );
            // Требуется возврат пустой строки для отображения диалога в некоторых браузерах
            event.returnValue = '';
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
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
