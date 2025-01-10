import {useState} from 'react';
import Icon from "../../commons/Icon";
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import {useSpring, animated} from '@react-spring/web';
import {Link} from "react-router-dom";

function WalletButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const userFriendlyAddress = useTonAddress();

    const springProps = useSpring({
        opacity: isMenuOpen ? 1 : 0,
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-2px)',
        config: {tension: 300, friction: 20},
    });

    return (
        <div className="relative ">
            {userFriendlyAddress ? (
                <div className="relative">
                    <TonConnectButton/>
                    <button
                        className="w-full pointer-events-none h-full rounded-[10px]  text-white text-[14px] font-[500] top-0 absolute bg-black "
                    >
                        Connect
                    </button>
                </div>
            ) : (
                <button
                    onClick={toggleMenu}
                    className={`min-w-[101px] flex items-center gap-[8px] h-full text-white justify-center px-[22px] rounded-[10px] ${isMenuOpen && "rounded-b-none"} bg-black`}
                >
                    <Icon width={18} height={18} name={"ton"}/>
                    <span className="font-[700] text-[14px]">0.00</span>
                </button>
            )}

            {isMenuOpen && (
                <animated.div
                    style={{
                        ...springProps,
                        position: 'absolute',
                        left: 0,
                        width: '100%',
                        borderTop: '1px solid #333',
                        backgroundColor: 'black',
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                        zIndex: 10,
                    }}
                >
                    <div className="h-[42px] flex items-center justify-center  ">
                        <Link to={"/wallet"} className="text-[#D7D7D7] text-[12px]">Кошелек</Link>
                    </div>
                </animated.div>
            )}
        </div>
    );
}

export default WalletButton;
