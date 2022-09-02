import { useCallback } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ABI from "../abis/abi.js";
// import config from "../config/config.json"
import dappConfig from "../config/configGoerli.json";
import { parseEther } from "ethers/lib/utils";
import useToast from "../utils/useToast";
import { EType } from "../Enums";

const contractObj = {
  isSigner: false,
  address: dappConfig.GAME_ADDRESS,
  funcName: "",
  abi: ABI,
  args: [],
  successCallBack: (msg: any) => {},
  errorCallBack: (error: any) => {},
  successCallBackConfirm: (msg: any) => {},
  errorCallBackConfirm: (error: any) => {},
  sendValue: { status: false, amt: "" },
};

const useContract = (contractInput = {}) => {
  const toast = useToast();

  const finalValue = { ...contractObj, ...contractInput };
  const {
    abi,
    address,
    funcName,
    isSigner,
    args,
    successCallBack,
    errorCallBack,
    successCallBackConfirm,
    errorCallBackConfirm,
    sendValue,
  } = finalValue;
  if (!funcName) return;
  const { config } = usePrepareContractWrite({
    addressOrName: address,
    contractInterface: abi,
    functionName: funcName,
    ...{
      ...(sendValue.status && {
        overrides: { value: parseEther(sendValue.amt) },
      }),
    },
    args,
  });

  const { writeAsync, ...otherData } = useContractWrite({
    ...config,
  });

  useWaitForTransaction({
    confirmations: 1,
    hash: otherData?.data?.hash,
    onSuccess(msg) {
      toast("transaction confirmed", otherData.data.hash, EType.success);
      successCallBackConfirm(msg);
    },
    onError(error) {
      errorCallBackConfirm(error);
    },
  });

  const readData = useContractRead({
    addressOrName: address,
    contractInterface: abi,
    functionName: funcName,
  });

  const contract = useCallback(
    async () =>
      writeAsync?.()
        .then((data) => {
          successCallBack(data);
          toast("transaction submitted successfully", otherData?.data?.hash);
        })

        .catch((e) => {
          errorCallBack(e);
          toast(e.message, "", EType.error);
          console.log(e, "error");
        }),
    [writeAsync]
  );
  const data = isSigner ? otherData : readData;
  return { contract, data };
};

export default useContract;
