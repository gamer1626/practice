import React from 'react'

const Booking = () => {
  return (
    <div id="deals" className='max-w-[1140px] mx-auto p-4'>
          <form className='lg:flex lg:justify-between items-center'>
              <div className='flex flex-col py-2 my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2 lg:w-[300px]'>
                      <option>Grande Antigua</option>
                      <option>Key West</option>
                      <option>Maldives</option>
                  </select>
              </div>
          <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label>Check-in</label>
              <input type="date" className='border rounded-md  p-2' />
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label htmlFor="Check-out">Check-out</label>
              <input type="date"  className='border rounded-md  p-2'/>
            </div>
              </div>
              <div className='flex flex-col w-full my-2 p-2' >
                  <input type="text" placeholder='Search' className='outline-none border p-2 my-2' />
              <button className='w-full'>Rates & Availabities</button>
            </div>
        </form>
    </div>
  )
}
export default Booking
