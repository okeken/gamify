import { ConnectKitButton } from "connectkit";

import Button  from ".";
import truncateAddress from "../../../utils/truncateAddress";

const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, address, ensName }) => {
        return (<>
            <Button 
            disabled={isConnecting}
             onClick={show}>       
             {isConnected}  
            {isConnected ? 
            (!!ensName ? ensName : truncateAddress(address)) : isConnecting ? 'Connecting': 'Connect Wallet'}
                </Button>
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
};


export default ConnectButton