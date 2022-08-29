import { ethers } from 'ethers'
import Abi from '../abis/abi.json'

declare var window: any

const useContract = (address:string, isSigner:boolean=false)=>{
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    const providerSigner = new ethers.providers.Web3Provider(window!.ethereum)
    const signer = providerSigner.getSigner()
    const tokenContract = new ethers.Contract(address,Abi, isSigner ? signer : provider)
    return tokenContract;
}

export default useContract