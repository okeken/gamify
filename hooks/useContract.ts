import { useCallback,useEffect, useState } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useFeeData,
  useNetwork,

} from "wagmi";
import ABI from "../abis/abi.js";
// import config from "../config/config.json"
import dappConfig from "../config/configGoerli.json";
import { parseEther } from "ethers/lib/utils";
import useToast from "../utils/useToast";
import { EType } from "../Enums";
// import chains from "../config/networks.js";


const contractObj = {
  isSigner: false,
  address: dappConfig.chains.default.address,
  funcName: "",
  abi: ABI,
  args: [],
  successCallBack: (any) => {},
  errorCallBack: (error: any) => {},
  successCallBackConfirm: (msg: any) => {},
  errorCallBackConfirm: (error: any) => {},
  sendValue: { status: false, amt: "" },
};


const defaultContractAddress = dappConfig.chains.default.address 

const useContract = (contractInput = {}, successCallbackAction=(msg: any) => {},) => {
  const toast = useToast();
  const { data:feeData } = useFeeData()
  const {chain, chains} = useNetwork()
  const [contractAddress, setAddress] = useState(defaultContractAddress)
  const chainName = chain?.network ?? 'default'

  useEffect(()=>{
    setAddress(dappConfig.chains[chainName]?.address)
  },[chains])

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
    addressOrName: contractAddress,
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
    onError(error) {
      errorCallBackConfirm(error);
      // toast(error.message, "", EType.error);
    },
  });

  const { writeAsync, ...writeData } = useContractWrite({
    ...config,
  });

  useWaitForTransaction({
    confirmations: 1,
    hash: writeData?.data?.hash,

    onSuccess(msg) {
      toast("Transaction Confirmed", writeData.data.hash, EType.success);
      successCallBackConfirm(msg);
      successCallbackAction(msg)
    },
    onError(error) {
      errorCallBackConfirm(error);
      toast(error.message, "", EType.error);
    },
  });

  const readData = useContractRead({
    addressOrName: contractAddress,
    contractInterface: abi,
    functionName: funcName,
    chainId:chain?.id ??  Number(dappConfig.CHAIN_ID),
  });


  const contract = useCallback(
    async () =>
      writeAsync?.()
        .then((data) => {
          successCallBack(data);
          toast("Transaction Submitted Successfully", writeData?.data?.hash);
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
