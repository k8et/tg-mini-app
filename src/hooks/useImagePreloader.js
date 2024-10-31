import { useEffect, useState } from 'react';

const useImagePreloader = (imageArray) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let loadedImagesCount = 0;

        const handleImageLoad = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === imageArray.length) {
                setIsLoading(false);
            }
        };

        const preloadImages = (images) => {
            images.forEach((src) => {
                const img = new Image();
                img.src = src;
                img.onload = handleImageLoad;
                img.onerror = handleImageLoad;
            });
        };

        if (imageArray && imageArray.length > 0) {
            preloadImages(imageArray);
        } else {
            setIsLoading(false);
        }
    }, [imageArray]);

    return isLoading;
};

export default useImagePreloader;
