import React from 'react'
import Discord from './commons/Icons/Discord'
import Twitter from './commons/Icons/Twitter'

export const HeaderNav = ()=>{
    return(
    <>
  <div className=''>     
      <div className="flex items-center justify-between p-3">
        <div>Logo</div>
        <div>
          <div className='flex items-center'>
            <div className='flex'>
              <Discord className='mr-4'/>
              <Twitter className='mr-4' />
            </div>
            <button className='p-2 border border-red-300 rounded-md'>Connect Wallet</button>
          </div>
        </div>
        </div>
  </div>
    </>)
}



