import {useState, useEffect} from 'react'
import useContract from "./useContract";
import getContract from '../utils/contract';

const useGetOpenEnds = () => {
  const [number, setNumber] = useState(null)
  
  const check = async()=> {
    const contract = getContract()
    const result = await contract.getNumOfOpenEnds()
    setNumber(Number(result))
  }
  const { contract, data: info } = useContract({
    funcName: "getOpenEnds",
    isSigner: true,
    args: [5],
    successCallBackConfirm:check
  });

  useEffect(()=>{
     check()
  },[number])

  return { contract, info };
};

export default useGetOpenEnds;
