import useContract from "./useContract";

const useGetNumOfOpenEnds = () => {
  const {data} = useContract({funcName:'getNumOfOpenEnds'});
  const num = Number(data.data) ?? 0
  return num
};

export default useGetNumOfOpenEnds;
