import { useCallback } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useFeeData,
  useNetwork
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
  successCallBack: (any) => {},
  errorCallBack: (error: any) => {},
  successCallBackConfirm: (msg: any) => {},
  errorCallBackConfirm: (error: any) => {},
  sendValue: { status: false, amt: "" },
};


const useContract = (contractInput = {}, successCallbackAction=(msg: any) => {},) => {
  const toast = useToast();
  const { data:feeData } = useFeeData()
  const {chain} = useNetwork()
  const finalValue = { ...contractObj, ...contractInput };
  // const numberOfOpenEnds  = useGetNumOfOpenEnds()
  // const {loadData} = useData()
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
    chainId:chain?.id ??  Number(dappConfig.CHAIN_ID),
    ...{
      ...(sendValue.status && {
        overrides: { 
          gasPrice:feeData?.gasPrice,
          value: parseEther(sendValue.amt) 
        },
        
      }),
    },
    args,
  });

  const { writeAsync, ...writeData } = useContractWrite({
    ...config,
  });

  useWaitForTransaction({
    confirmations: 1,
    hash: writeData?.data?.hash,

    onSuccess(msg) {
      toast("transaction confirmed", writeData.data.hash, EType.success);
      successCallBackConfirm(msg);
      // loadData(numberOfOpenEnds)
      successCallbackAction(msg)
    },
    onError(error) {
      errorCallBackConfirm(error);
    },
  });

  const readData = useContractRead({
    addressOrName: address,
    contractInterface: abi,
    functionName: funcName,
    chainId:chain?.id ??  Number(dappConfig.CHAIN_ID),
  });


  const contract = useCallback(
    async () =>
      writeAsync?.()
        .then((data) => {
          successCallBack(data);
          toast("transaction submitted successfully", writeData?.data?.hash);
        })

        .catch((e) => {
          errorCallBack(e);
          toast(e.message, "", EType.error);
          console.log(e, "error");
        }),
    [writeAsync]
  );
  const data = isSigner ? writeData : readData;
  return { contract, data };
};

export default useContract;
