import React from 'react'
import Discord from './commons/Icons/Discord'
import Twitter from './commons/Icons/Twitter'

export const HeaderNav = ()=>{
    return(
    <>
  <div className='text-blue-100 bg-black '>     
      <div className="flex items-center justify-between max-w-5xl p-3 pt-8 mx-auto">
        <div>Logo</div>
        <div>
          <div className='flex items-center'>
            <div className='flex'>
              <Discord className='mr-8'/>
              <Twitter className='mr-8' />
            </div>
            <button className='p-2 px-4 border border-yellow-600 rounded-md'>Connect Wallet</button>
          </div>
        </div>
        </div>
  </div>
    </>)
}



