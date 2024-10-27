import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import Icon from "../Icon"; // Импортируем компонент Icon

const CopyButton = ({textToCopy}) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 300);
        });
    };

    const animationProps = useSpring({
        transform: isCopied ? 'scale(0.85)' : 'scale(1)',
    });

    return (
        <button onClick={handleCopy} className="cursor-pointer">
            <animated.div style={animationProps}
                          className="flex items-center justify-center bg-[#0098EA] min-w-[32px] h-full rounded-[5px] p-1">
                <Icon width={15} height={15} name={"copy"}/>
            </animated.div>
        </button>
    );
};

export default CopyButton;
