import React from 'react'
import{AiOutlineClockCircle,AiFillPhone} from 'react-icons/ai'
import { BsFillChatLeftDotsFill } from 'react-icons/bs';

const TopBar = () => {
  return (
    <div className='flex items-center px-4 py-2 justify-between'>
      <div className='flex items-center'>
        <BsFillChatLeftDotsFill size={30} className="mr-2 text-[var(--primary-dark)]" />
        <h2 className='font-bold uppercase text-gray-700'>Weekaway</h2>
      </div>
      <div className='flex '>
        <div className='hidden items-center md:flex px-6'>
          <AiOutlineClockCircle size={30}  className="text-[var(--primary-dark)]"/>
          <p className="text-sm px-2 text-gray-700">9AM - 5PM</p>
        </div>
        <div className='hidden items-center md:flex'>
          <AiFillPhone size={30} className="text-[var(--primary-dark)]"/>
          <p className="text-sm px-2 mr-4 text-gray-700">1-2938-234</p>
        </div>
         <button className='block'>Get a Free Quote</button>
      </div>
      </div>
  )
}

export default TopBar;
