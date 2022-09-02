import { useState, useEffect, useMemo } from "react";
import { useContractEvent } from "wagmi";
import gameConfig from "../config/configGoerli.json";
// import gameConfig from "../config/confi.json"
import ABI from "../abis/abi";
import useGetOpenEnds from "./useGetOpenEnds";

const useEvent = (name: string) => {
  const [number, setNumber] = useState({ mounted: false, value: null });
  const { contract } = useGetOpenEnds();
  useEffect(() => {
    if (number.mounted && number.value <= 10) {
      contract();
    }
  }, [number.value]);
  useContractEvent({
    addressOrName: gameConfig.GAME_ADDRESS,
    contractInterface: ABI,
    eventName: name,
    listener: (event) =>
      setNumber(() => ({ mounted: true, value: event[0]?.length })),
  });
};

export default useEvent;
