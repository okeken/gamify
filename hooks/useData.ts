import { useEffect, useState, useMemo, useCallback } from "react";
import useGetNumOfOpenEnds from "./useGetNumOfOpenEnds";
import Wallet from "ethereumjs-wallet"


// simulate list of parent wallet address;
const list = (num)=>{
 const w =  Wallet.generate()
 const add = w.getAddressString()
  let li = []
  for(let i=0; i < num; i++){
    li.push(add)
  }
return li
}
const useData = () => {
  const num = useGetNumOfOpenEnds()
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(num);
  }, [num]);

  const loadData = useCallback(async(number) => {
    setIsLoading(true);
    try {
      const data = list(number)
      setData(data);
    } catch (error) {
      setIsErrored(true);
    } finally {
      setIsLoading(false);
    }
  },[]
)
  return { isLoading, isErrored, data, setIsLoading, firstTimeLoading, loadData };
};

export default useData;
