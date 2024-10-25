import { Route, Routes} from "react-router-dom";
import MainLayout from "./layout";
import Main from "./pages/Main";
import Dish from "./pages/Dish";
import {useEffect} from "react";



function App() {
    useEffect(() => {
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.onEvent('backButtonClicked', () => {
                console.log("Кнопка 'Назад' нажата");
            });
        }
    }, []);
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/dish" element={<Dish/>}/>
            </Routes>
        </MainLayout>

    );
}

export default App;
