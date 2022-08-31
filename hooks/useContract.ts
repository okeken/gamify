import { ethers } from 'ethers'
import Abi from '../abis/abi.json'
import { GAME_ADDRESS} from "../config/config.json"

declare var window: any

const useContract = (isSigner:boolean=false, address:string=GAME_ADDRESS,)=>{
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    const providerSigner = new ethers.providers.Web3Provider(window!.ethereum)
    const signer = providerSigner.getSigner()
    const tokenContract = new ethers.Contract(address,Abi, isSigner ? signer : provider)
    return tokenContract;
}

export default useContract