import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";

const Main = lazy(() => import("./pages/Main"));
const Dish = lazy(() => import("./pages/Dish"));
const Shop = lazy(() => import("./pages/Shop"));
const Friends = lazy(() => import("./pages/Friends"));
const Rewards = lazy(() => import("./pages/Rewards"));
const Wallet = lazy(() => import("./pages/Wallet"));

function App() {
    return (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/dish" element={<Dish />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Routes>
            </Suspense>
        </MainLayout>
    );
}

export default App;
