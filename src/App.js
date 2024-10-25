import { Route, Routes} from "react-router-dom";
import MainLayout from "./layout";
import Main from "./pages/Main";
import Dish from "./pages/Dish";
import {useEffect} from "react";



function App() {
    useEffect(() => {
        // Убедитесь, что WebApp доступен
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.ready(); // Подготовка WebApp

            // Устанавливаем текст главной кнопки
            window.Telegram.WebApp.MainButton.text = "Моя кнопка";
            window.Telegram.WebApp.MainButton.show(); // Показываем главную кнопку

            // Обработка событий
            window.Telegram.WebApp.onEvent('backButtonClicked', () => {
                console.log("Кнопка 'Назад' нажата");
                // Здесь можно добавить вашу логику
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
