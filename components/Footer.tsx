import React from 'react'
import Discord from './commons/Icons/Discord'
import Twitter from './commons/Icons/Twitter'

export const Footer = ()=>{
    return (
      <div className='bg-blue-300'>
        <footer>
        <div className=''>     
      <div className="flex items-center justify-between p-3">
        <div>Mailing List</div>
        <div>
          <div className='flex items-center'>
            <div className='flex'>
              <Discord className='mr-4'/>
              <Twitter className='mr-4' />
            </div>
            
          </div>
        </div>
        </div>
  </div>
        </footer>

      </div>
    )
}




