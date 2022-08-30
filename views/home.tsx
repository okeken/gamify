import React from 'react'
import useData from '../hooks/useData'
import truncateAddress from '../utils/truncateAddress'


const Home = ()=>{
    const {data} = useData()

    const _list = data.map((i, idx)=> (<div className='p-3 my-4 text-center border cursor-pointer' key={idx}>
        {truncateAddress(i)}
        </div>))
    return (<> 
  <div className="">  
      <div className='grid justify-center max-w-4xl px-4 py-12 mx-auto md:grid-cols-2 md:flex-col-reverse'>
        <div className='mx-12 mb-8 md:mb-0 '>
            <h1 className='mb-6 text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Conse</h1>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda quia magni ex odit expedita vel, quaerat ratione? Ad, laborum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda quia magni ex odit expedita vel, quaerat ratione? Ad, laborum.</p>
            
        </div>
        <div className=''><iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe></div>
      </div>
      <div className='grid justify-center max-w-4xl px-4 py-12 mx-auto md:grid-cols-2 md:flex-col-reverse'>
        <div className='mx-12 mb-8 overflow-auto md:mb-0 max-h-96 '>
            {_list}
            
        </div>
        <div className='flex justify-center w-100'>
            <div >
            <div className='w-full p-6 border min-h-min'>
                    
          <div className='h-auto p-4 text-center'>
            <h2 className='mb-4 text-2xl'>Parent Wallet </h2>
            <button className='px-10 py-2 border rounded-sm'>Join</button>
          </div>

          <div className='p-4 text-center'>
            <h2 className='mb-4 text-2xl'>Eligible </h2>
            <button className='px-10 py-2 border rounded-sm'>Claim</button>
          </div>
                </div>
            </div>
          
</div>
      </div>
    </div>
    </>)
}

export default Home