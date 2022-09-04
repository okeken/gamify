import React, {  useState,useContext } from "react";
import useData from "../hooks/useData";
import useJoin from "../hooks/useJoin";
import { useNetwork } from "wagmi";
import gameConfig from "../config/configGoerli.json";
import useClaim from "../hooks/useClaim";
import ClipBoard from "../components/commons/Icons/ClipBoard";
import ClipBoardCheck from "../components/commons/Icons/ClipBoardCheck/index";
import  {GameContext}  from "../context/gameContext";
import truncateAddress from "../utils/truncateAddress";


const claimConfig = {
  name: "claim",
  isSigner: true,
  sendValue: { status: false },
};

const listCopy = {index:null}

const Home = () => {
  const {data} = useContext(GameContext)

  const [copyList, setCopyList]= useState(listCopy)
  const [parentWallet, setParentWallet] = useState('')

  function clearJoin(){
    setParentWallet(null)
  }
  
  const joinConfig = {
    name: "join",
    isSigner: true,
    sendValue: { status: true, amt: gameConfig.PAYMENT_AMOUNT },
    successCallBackConfirm:clearJoin
  };
  const { contract: joinContract, info:joinInfo } = useJoin(joinConfig);
  const { claimContract, claimInfo } = useClaim(claimConfig);
  

  const join = async () => {
    if(!parentWallet) return;
   
    try{
     await  joinContract();

    }
    catch(e){
    
    }
  };

  const claim = () => {
    claimContract();
  };

  const setCopy=(index, value)=>{
    setCopyList({index:null})
    navigator.clipboard.writeText(value)
    setCopyList({index})
    setTimeout(()=>{
      setCopyList({index:null})
    },3000) 
  }

  const handleParentWallet =(e)=>{
    setParentWallet(e.target.value)
  }

  const _list = data.map((i, idx) => (  
    <div
      className="p-3 my-6 border border-blue-400 rounded-md cursor-pointer "
      key={idx}
    >
      <button
      className="flex"
      onClick={()=>setCopy(idx, i)}
     >
      <>
      {idx + 1}
         {/* {i} */}
         {truncateAddress(i)}
         {
          copyList.index ===idx 
          ?
           <div className="relative flex"> 
            <span className="absolute -top-9">copied</span>
           <ClipBoardCheck className="mx-2 text-gray-900 text-md" />
            </div>
           :  
           <ClipBoard className="mx-2 text-gray-900 text-md" />
         }
        
      </>
       </button>
    </div>
  ));

  return (
    <>
      <div className="">
        <div className="items-center text-xl text-blue-100 bg-black md:h-screen md:grid place-items-center">
          <div className="max-w-5xl mx-auto md:grid md:grid-cols-6  px-6 md:px-0">
            <div className="mb-8 md:col-end-4 md:col-start-1 md:mb-0 pt-28 md:pt-0">
              <h1 className=" mb-6 text-6xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 to-purple-800">
                Game On Blockchain
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias assumenda quia magni ex odit expedita vel, quaerat
                ratione? Ad, laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias assumenda quia magni ex odit expedita vel, quaerat
                ratione? Ad, laborum.
              </p>

              <button className="px-4 py-2 mt-10 text-xl border border-yellow-600 rounded-md">
                Start the Game
              </button>
            </div>
            <div className=" md:col-end-7 md:col-span-2">
              <div className="" style={{ height: "30" }}>
                <iframe
                  className="relative"
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 bg-gradient-to-br from-blue-100 to-purple-200">
          <div className="flex flex-wrap justify-center max-w-5xl mx-auto md:justify-between">
            <div className="overflow-auto">{_list}</div>
            <div className="flex flex-col mx-auto text-center md:mx-0">
              <div className="p-12 mt-4 border ">
              
                  <input 
                  onChange={handleParentWallet}
                  className="w-full p-2 mb-12 text-xl bg-transparent border border-blue-400 rounded-md" />
              
                <button
                  onClick={join}

                  className={`${joinInfo.isLoading ? 'cursor-not-allowed': ''} w-full px-4 py-3 text-xl font-semibold text-center uppercase border bg-yellow-600 rounded-md`}
                >
                 {joinInfo.isLoading ? 'Sending...': 'Join'}
                </button>
              </div>
              <div className="p-12 mt-4">
                <h2 className="mb-12 text-2xl">Eligible</h2>
                <button
                  onClick={claim}

                  className={`${claimInfo.isLoading ? 'cursor-not-allowed': ''} w-full px-4 py-3 text-xl font-semibold text-center uppercase border bg-yellow-600 rounded-md`}
                >
                 {claimInfo.isLoading ? 'Claiming...': 'Claim'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
