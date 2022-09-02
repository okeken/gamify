import useContract from "./useContract";

const useGetOpenEnds = (callback) => {
  const { contract, data: info } = useContract({
    funcName: "getOpenEnds",
    isSigner: true,
    args: [5],
  }, callback);

  return { contract, info };
};

export default useGetOpenEnds;
