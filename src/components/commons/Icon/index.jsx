import React, { memo } from "react";

const Icon = ({ name, className, height, width }) => (
    <svg
        style={{ height: `${height}px`, width: `${width}px` }}
        className={className}
    >
        <use xlinkHref={`/assets/svg/sprite.svg#${name}`} />
    </svg>
);

export default memo(Icon);
