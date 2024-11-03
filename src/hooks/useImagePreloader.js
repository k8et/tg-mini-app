import React, {createContext, useContext, useEffect, useState} from 'react';

const ImagePreloaderContext = createContext();

export const useImagePreloader = () => {
    return useContext(ImagePreloaderContext);
};

const ImagePreloader = ({children}) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        import('../.././src/assets/img/catMain.png'),
        import('../.././src/assets/gif/cat.gif'),
        import('../.././src/assets/svg/background.svg'),
        import('../.././src/assets/img/sun.png'),
        import('../.././src/assets/gif/clouds.gif'),
        import('../.././src/assets/img/bg-friend.png'),
        import('../.././src/assets/img/bg-rewars.png'),
    ];


    useEffect(() => {
        const loadImages = () => {
            const promises = images.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src.default || src;
                    img.onload = resolve;
                });
            });

            Promise.all(promises).then(() => {
                setImagesLoaded(true);
            });
        };

        loadImages();
    }, [images]);

    return (
        <ImagePreloaderContext.Provider value={{imagesLoaded}}>
            {children}
        </ImagePreloaderContext.Provider>
    );
};

export default ImagePreloader;
