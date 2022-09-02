import { useState, useEffect, useMemo, useCallback } from "react";
import { useContractEvent } from "wagmi";
import gameConfig from "../config/configGoerli.json";
// import gameConfig from "../config/confi.json"
import ABI from "../abis/abi";
import useGetOpenEnds from "./useGetOpenEnds";
import useData from "./useData";

const useEvent = (name: string) => {
  const [number, setNumber] = useState({ mounted: false, value: null });
  const { contract } = useGetOpenEnds(updateUI);

  async function updateUI() {
    await loadData(number.value)
  }
  const {loadData}  = useData()
  const val = number.value
  const updateData = useCallback(async(num)=>{
  //  await contract();
  },[])
  useEffect(() => {
    if ( number.value <= 10) {
    updateData(number)
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
