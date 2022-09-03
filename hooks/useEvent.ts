import { useState, useEffect, useMemo, useCallback } from "react";
import { useContractEvent } from "wagmi";
import gameConfig from "../config/configGoerli.json";
// import gameConfig from "../config/confi.json"
import ABI from "../abis/abi";
import useGetOpenEnds from "./useGetOpenEnds";

const useEvent = (name: string) => {
  const [number, setNumber] = useState({ mounted: false, value: null });
  const { contract } = useGetOpenEnds();
  const val = number.value
  const updateData = async()=>{
    await contract();
  }
  
  useEffect(() => {
    if (number.mounted && number.value <= 10) {
    updateData()
    }
  }, [val]);

  const updateNumber =(num)=>{
    setNumber({mounted:true, value:num})
  }

  useContractEvent({
    addressOrName: gameConfig.GAME_ADDRESS,
    contractInterface: ABI,
    eventName: name,
    listener: (event) => updateNumber(event[0]?.length)   
  });
};

export default useEvent;
