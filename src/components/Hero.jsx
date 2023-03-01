import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
          <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80" alt="main-image" className='w-full h-full object-cover' />
          <div className="max-w-[1140px] mx-auto ">
            <div className='absolute top-[40%] w-full md:w-[50%] h-full flex flex-col p-4'>
              <h1 className='font-bold text-2xl sm:text-3xl text-gray-200'>Find Your Special Trip <br /> <span className='italic'>With Weekaway</span> </h1>
              <p className='text-gray-200 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, eius reprehenderit totam quisquam ipsum nobis optio corrupti voluptas exercitationem ipsam.</p>
            </div>
          </div>
    </div>
  )
}

export default Hero
