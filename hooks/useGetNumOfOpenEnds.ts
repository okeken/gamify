import useContract from "./useContract";

const useGetNumOfOpenEnds = () => {
  const {data} = useContract({funcName:'getNumOfOpenEnds'});
  const num = Number(data.data) ?? 0
  // const val = useMemo(()=>num,[num])
  console.log( num)
  return num
};

export default useGetNumOfOpenEnds;
