import { ethers } from "ethers";
import config  from '../config/configGoerli.json'
import ABI from "../abis/abi";

const rpcUrl = "https://goerli.infura.io/v3/ba80361523fe423bb149026a490266f0";

const getContract= (isSigner=false, address=config.chains.default.address, rpcUrl=config.chains.default.rpcUrl, abi=ABI, )=>{
    
    const providerSigner = new ethers.providers.Web3Provider(window.ethereum);
    const signer = providerSigner.getSigner();
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const newProvider = isSigner ? signer : provider;
    return new ethers.Contract(address, abi, newProvider);

}


export default getContract;