import useContract from "./useContract";

const useGetOpenEnds = () => {
  const { contract, data: info } = useContract({
    funcName: "getOpenEnds",
    isSigner: true,
    args: [5],
  });

  return { contract, info };
};

export default useGetOpenEnds;
