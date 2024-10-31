import {useIsConnectionRestored, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import {useState} from "react";


export const SendTx = () => {
    const isConnectionRestored = useIsConnectionRestored();
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    const [txInProgress, setTxInProgress] = useState(false);


    let content
    switch (true) {
        case !isConnectionRestored:
            content = 'Loading...';
            break;
        case txInProgress:
            content = 'Tx in progress';
            break;
        case !!wallet:
            content = 'Send transaction';
            break;
        default:
        case !wallet:
            content = 'Connect Wallet';
            break;
    }

    const onClick = async () => {
        if (!wallet) {
            tonConnectUI.connectWallet();
        } else {
            setTxInProgress(true)
            try {
                await tonConnectUI.sendTransaction({
                    validUntil: Math.floor(Date.now() / 1000) + 360,
                    messages: [
                        {
                            amount: '1000000',
                            address: 'UQAmsqkW-5NCqMl42kQPT8qGpruMjqF6BbvJonx1QCvKIa8E'
                        }
                    ]
                });
            } catch (e) {
                console.log(e);
            }finally {
                alert("Успешно))")
            }

            setTxInProgress(false)
        }
    }

    return <button className={"z-[211]"} style={{ marginBottom: '20px' }} disabled={!isConnectionRestored || txInProgress} onClick={onClick}>
        {content}
    </button>
}