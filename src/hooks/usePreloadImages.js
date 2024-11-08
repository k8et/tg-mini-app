import { useEffect, useState } from 'react';

const usePreloadImages = (imagePaths) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadedImages = 0;

        imagePaths.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === imagePaths.length) {
                    setLoading(false);
                }
            };
        });
    }, [imagePaths]);

    return loading;
};

export default usePreloadImages;
