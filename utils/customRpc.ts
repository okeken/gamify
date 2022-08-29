import { ethers } from 'ethers'
import  abi from '../abis/abi.json'

const rpc = (address ='')=>{
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    const tokenContract = new ethers.Contract(address,abi, provider)
    return tokenContract;
}

export default rpc;

