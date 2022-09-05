import React, { createContext, useState,useEffect, } from 'react';
import {useNetwork} from "wagmi"
import useContract from '../hooks/useContract';
import getContract from '../utils/contract';
import { useContractEvent, } from "wagmi";
import ABI from "../abis/abi"
import Wallet from "ethereumjs-wallet"
import config from "../config/index.json"
import useAddress from '../hooks/useAddress';
import useRpc from '../hooks/useRpc';

const {address:defaultAddress, rpcUrl:defaultRpcUrl} = config.chains.default

//simulate list of parent wallet address;
const list = (num)=>{
 const w =  Wallet.generate()
 const add = w.getAddressString()
  let li = []
  for(let i=0; i < num; i++){
    li.push(add)
  }
return li
}

export const GameContext = createContext<any>({});

const GameProvider = (props) => {
const {chain} = useNetwork()

const currentNetworkName = chain?.network ?? 'default'
const [number, setNumber] = useState(null)
const [data, setData] = useState([])
const contractAddress = useAddress()
const rpc = useRpc()


const loadData = async(number) => {
  try {
    const data = list(number)
    setData(data);
  } catch (error) {
   
  } finally {
    
  }
}

    const checkNumber = async()=> {
    const contract = getContract(false, contractAddress, rpc)
    const result = await contract.getNumOfOpenEnds()
    setNumber(Number(result))
    loadData(Number(result))
  }

  const updateDataUI  = ()=>{
    checkNumber()
  }

   const {contract} = useContract({
    funcName:'getOpenEnds',successCallBackConfirm:updateDataUI,
    args:[5],
    isSigner:true
  });

  
  useEffect(()=>{   
    checkNumber()
    if(typeof number ==='number' && number <=10 ){
        contract()  
    }
  },[number, currentNetworkName, rpc])

  const trackEvent = (num)=>{
    setNumber(num)

  }
  useContractEvent({
    addressOrName: contractAddress,
    contractInterface: ABI,
    eventName:'availableList',
    listener: (event) => trackEvent(event[0]?.length)   
  });
  return (
    <GameContext.Provider value={{data}}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider