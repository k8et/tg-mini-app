import { useEffect } from "react";

const useImagePreloader = (imageUrls) => {
    useEffect(() => {
        const images = imageUrls.map((url) => {
            const img = new Image();
            img.src = url;
            return img;
        });

        // Clean up function to release images if needed
        return () => images.forEach(img => img.src = '');
    }, [imageUrls]);
};

export default useImagePreloader;
