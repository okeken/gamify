import React from 'react'
import useData from '../hooks/useData'
import truncateAddress from '../utils/truncateAddress'


const Home = ()=>{
    const {data} = useData()

    const _list = data.map((i, idx)=> (<div className='p-3 my-4 border border-blue-400 rounded-md cursor-pointer ' key={idx}>
        {/* {truncateAddress(i)} */}
        <span className='px-3'>
          
        {idx + 1}
        </span>
        {i}
        </div>))
    return (<> 
  <div className="">  
  <div className='items-center text-xl text-blue-100 bg-black md:h-screen md:grid place-items-center'>
      <div className='max-w-5xl mx-auto md:grid md:grid-cols-6 '>
        <div className='mb-8 md:col-end-4 md:col-start-1 md:mb-0'>
            <h1 className='mb-6 text-6xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 to-purple-800'>Game On Blockchain</h1>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda quia magni ex odit expedita vel, quaerat ratione? Ad, laborum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda quia magni ex odit expedita vel, quaerat ratione? Ad, laborum.</p>

              <button className='px-4 py-2 mt-10 text-xl border border-yellow-600 rounded-md'>Start the Game</button>
        </div>
        <div className=' md:col-end-7 md:col-span-2'>
          <div className='' style={{height:'30'}}>
          <iframe className='relative' width="100%" height="450" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
            
          </div>
</div>
      </div>
      </div>
    <div className='py-12 bg-gradient-to-br from-blue-100 to-purple-200'>
      <div className='flex flex-wrap justify-between max-w-5xl mx-auto'>
        <div className='overflow-auto'>{_list}</div>
        <div className='flex flex-col mx-auto text-center md:mx-0'>
          <div className='p-12 mt-4 border border-red-400'> 
            <h2 className='mb-12 text-2xl'>
            Parent Wallet
            </h2>
            <button className='w-full px-4 py-2 text-xl font-semibold text-center uppercase border border-yellow-600 rounded-md'>Join</button>
          </div>
          <div className='p-12 mt-4 border border-red-400'> 
            <h2 className='mb-12 text-2xl'>
            Eligible
            </h2>
            <button className='w-full px-4 py-2 text-xl font-semibold text-center uppercase border border-yellow-600 rounded-md'>claim</button>
          </div>
        
        </div>
      </div>
    </div>
    </div>
    </>)
}

export default Home