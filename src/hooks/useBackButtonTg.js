import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackButtonTg = (onBack, shouldShowBackButton) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (shouldShowBackButton && window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.BackButton.show();

            const handleBackButtonClick = () => {
                if (onBack) {
                    onBack(); // выполняется функция, если она передана
                } else {
                    navigate(-1); // переходит назад, если функция не передана
                }
            };

            window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
        }

        return () => {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.BackButton.hide();
            }
        };
    }, [onBack, navigate, shouldShowBackButton]);
};

export default useBackButtonTg;
