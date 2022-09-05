import { useState, useEffect } from "react";
import {useNetwork} from "wagmi"
import config from "../config/index.json"


const defaultRpc= config.chains.default.rpcUrl
const useRpc = ()=>{
    const {chain} = useNetwork()
    const chainName= chain?.network ??'default'
    const [rpc, setRpc]= useState(defaultRpc)

    useEffect(()=>{
        setRpc(config.chains[chainName]?.rpcUrl)
    },[chainName])

    return rpc
}


export default useRpc