import React from 'react'
import { BsFillChatLeftDotsFill } from 'react-icons/bs';

  
const footer = () => {
  return (
    <div id="footer" className='bg-gray-100 py-4 flex items-center justify-center'>
      <BsFillChatLeftDotsFill size={ 30 } className="text-[var(--primary-dark)] mr-2" />
      <h2 className='uppercase text-2xl text-gray-700'>WeekAway</h2>
    </div>
  )
}

export default footer

