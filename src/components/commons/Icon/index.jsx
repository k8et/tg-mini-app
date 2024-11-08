import React, {memo} from "react";
import sprite from "../../../assets/svg/sprite.svg";

const Icon = ({ name, className, height, width }) => (
  <svg style={{ height: `${height}px`, width: `${width}px` }} className={` ${className}`}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);

export default memo(Icon);
