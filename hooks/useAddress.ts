import { useState, useEffect } from "react";
import {useNetwork} from "wagmi"
import config from "../config/index.json"


const defaultAddress= config.chains.default.address
const useAddress = ()=>{
    const {chain} = useNetwork()
    const chainName= chain?.network ??'default'
    const [address, setAddress]= useState(defaultAddress)

    useEffect(()=>{
        setAddress(config.chains[chainName]?.address)
    },[chainName])

    return address
}


export default useAddress