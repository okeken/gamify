import useContract from "./useContract";

const useClaim = ({ name, isSigner, sendValue = { status: true } }) => {
  const { contract, data: info } = useContract({
    funcName: name,
    isSigner,
    sendValue: { status: sendValue.status },
  });

  return { claimContract: contract, claimInfo: info };
};

export default useClaim;
