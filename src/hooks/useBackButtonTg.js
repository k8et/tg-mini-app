import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackButtonTg = (onBack, enabled = true) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (enabled && window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.BackButton.show();

            const handleBackButtonClick = () => {
                if (onBack) {
                    onBack();
                } else {
                    navigate("/");
                }
            };

            window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);

            return () => {
                window.Telegram.WebApp.BackButton.hide();
                window.Telegram.WebApp.BackButton.offClick(handleBackButtonClick);
            };
        }
    }, [onBack, navigate, enabled]);
};

export default useBackButtonTg;
