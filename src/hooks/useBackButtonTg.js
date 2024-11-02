import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackButtonTg = (onBack) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.BackButton.show();

            const handleBackButtonClick = () => {
                if (onBack) {
                    onBack();
                } else {
                    navigate(-1); // Возвращает на предыдущую страницу
                }
            };

            window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
        }

        return () => {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.BackButton.hide();
            }
        };
    }, [onBack, navigate]);
};

export default useBackButtonTg;
