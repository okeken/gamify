import useContract from "./useContract";

const useJoin = ({
  name,
  isSigner = false,
  sendValue = { status: true, amt: "" },
}) => {
  const { contract, data: info } = useContract({
    funcName: name,
    isSigner,
    sendValue: { status: sendValue.status, amt: sendValue.amt },
  });

  return { contract, info };
};

export default useJoin;
