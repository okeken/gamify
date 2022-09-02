import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { ConnectKitButton, useModal } from "connectkit";
import Button from ".";
// import truncateAddress from "../../../utils/truncateAddress";

const ConnectButton = () => {
  const [walletAvailable, setWalletNotAvailable] = useState(undefined);
  const { open, setOpen } = useModal();

  useEffect(() => {
    if (typeof window.ethereum == "undefined") {
      setWalletNotAvailable(true);
    } else {
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
