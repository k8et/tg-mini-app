import React, { useEffect } from 'react';

const TelegramMiniApp = () => {
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();  // Сообщаем Telegram, что WebApp готов к использованию
    }, []);

    return (
        <div>
            <h1>Добро пожаловать в Telegram Mini App!</h1>
            <p>Ваше веб-приложение готово к работе внутри Telegram.</p>
        </div>
    );
};

export default TelegramMiniApp;
