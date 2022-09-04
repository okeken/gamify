import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectKitButton, useModal } from "connectkit";
import Button from ".";

const ConnectButton = () => {
  const {isConnected}  = useAccount()
  const [walletAvailable, setWalletNotAvailable] = useState(undefined);
  const { open, setOpen } = useModal();
  useEffect(() => {
    if (typeof window.ethereum == "undefined" ) {
      setWalletNotAvailable(true);
    } else {
      if(isConnected) return;
      if (!open) setOpen(true);
    }
  }, []);
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, ensName, truncatedAddress }) => {
        return (
          <>
            <Button disabled={isConnecting} onClick={show}>
              {isConnected}
              {isConnected
                ? !!ensName
                  ? ensName
                  : truncatedAddress
                : isConnecting
                ? "Connecting"
                : walletAvailable
                ? "Install a wallet"
                : "Connect Wallet"}
            </Button>
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
