import { useEffect } from 'react';

const useBackButtonTg = (onBack) => {
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.BackButton.show();

            const handleBackButtonClick = () => {
                if (onBack) {
                    onBack();
                }
            };

            window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
        }

        return () => {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.BackButton.hide();
            }
        };
    }, [onBack]);
};

export default useBackButtonTg;
