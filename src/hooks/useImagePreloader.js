const useImagePreloader = (images) => {
    return new Promise((resolve) => {
        let loadedImagesCount = 0;
        const totalImages = images.length;

        const onImageLoad = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === totalImages) {
                resolve(); // Все изображения загружены
            }
        };

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = onImageLoad;
            img.onerror = onImageLoad; // Учитываем ошибку загрузки
        });
    });
};

export default useImagePreloader;
