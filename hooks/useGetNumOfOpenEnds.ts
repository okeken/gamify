import {useMemo} from "react"
import useContract from "./useContract";

const useGetNumOfOpenEnds = () => {
  const {data} = useContract({funcName:'getNumOfOpenEnds'});
  const num = Number(data.data) ?? 0
  const val = useMemo(()=>num,[num])
  return val
};

export default useGetNumOfOpenEnds;
