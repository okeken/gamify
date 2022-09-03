import React, { createContext, useState,useEffect, } from 'react';
import useContract from '../hooks/useContract';
import getContract from '../utils/contract';
import { useContractEvent } from "wagmi";
import gameConfig from "../config/configGoerli.json"
import ABI from "../abis/abi"
import Wallet from "ethereumjs-wallet"


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
const [number, setNumber] = useState(null)
const [data, setData] = useState([])


const loadData = async(number) => {
  try {
    const data = list(number)
    setData(data);
  } catch (error) {
   
  } finally {
    
  }
}

  
  const checkNumber = async()=> {
    const contract = getContract()
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
  },[number])

  const trackEvent = (num)=>{
    setNumber(num)

  }
  useContractEvent({
    addressOrName: gameConfig.GAME_ADDRESS,
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