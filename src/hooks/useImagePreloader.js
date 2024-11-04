import React, {createContext, useContext, useEffect, useState} from 'react';

const images = [
    import('../../src/assets/img/catMain.png'),
    import('../../src/assets/gif/cat.gif'),
    import('../../src/assets/svg/background.svg'),
    import('../../src/assets/img/sun.png'),
    import('../../src/assets/gif/clouds.gif'),
    import('../../src/assets/img/bg-friend.png'),
    import('../../src/assets/img/bg-rewars.png'),
];
const ImagePreloaderContext = createContext();

export const useImagePreloader = () => {
    return useContext(ImagePreloaderContext);
};

const ImagePreloader = ({children}) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);


    useEffect(() => {
        const loadImages = async () => {
            try {
                // Resolve all image imports
                const resolvedImages = await Promise.all(images);

                const promises = resolvedImages.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src.default; // Use src.default to access the image URL
                        img.onload = resolve;
                        img.onerror = () => {
                            console.error(`Error loading image: ${img.src}`);
                            resolve(); // Continue even if there's an error
                        };
                    });
                });

                await Promise.all(promises);
                console.log('All images loaded');
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error loading images:', error);
            }
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
