import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1140px] mx-auto p-4 py-16'>
          <h2 className='text-center text-2xl text-gray-7 scroll-py-24'>Send us message</h2>
          <p className='text-center py-2'>We're Starting by!</p>
          <div className='grid sm:grid-cols-2'>
          <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80" alt="/" className='w-full md:h-full max-h-[500px] h-[200px] object-cover object-top' />
              <form className=''>
                  <div className='grid grid-cols-2 py-4'>
                     <input type="text" placeholder='First' className='p-2 outline-none border m-2' />
                     <input type="text" placeholder='Last' className='p-2 outline-none border m-2' />
                     <input type="text" placeholder='Email' className='p-2 outline-none border m-2' />
                     <input type="text" placeholder='Phone' className='p-2 outline-none border m-2' />
                     <input type="text" placeholder='Address' className='p-2 outline-none border m-2 col-span-2' />
                     <textarea cols="30" rows="10" placeholder='Type your message here' className='col-span-2 p-2 m-2 border outline-none'></textarea>
                     <button className='m-2 pt-2 col-span-2'>Submit</button>
                  </div>
              </form>
            </div>
    </div>
  )
}

export default Contact
