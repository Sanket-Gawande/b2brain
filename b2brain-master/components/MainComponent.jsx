import Image from 'next/image'
import React from 'react'

const MainComponent = () => {
  return (
    <section className='overflow-auto h-[calc(100vh-50px)]'>
      {/* hero section */}
      <div className=' h-[calc(100%-50px)] w-[90%] mx-auto justify-center   flex  flex-col md:flex-row bg-[url("/hero.svg" )] place-items-center'>

        {/*  content */}
        <div className='w-full md:w-[50%] px-8 order-2 md:order-1 mt-6'>
          <h4 className='md:text-5xl text-4xl font-semibold'>Increase your pipeline by <span className='text-primary'>35-150%</span></h4>
          <p className='my-4 text-slate-600 text-xl'>Automated account intelligence for your sales team</p>
        </div>
        {/*  image content */}
        <div className='w-full md:w-[50%] order-1  md:order-2'>
          <img src="/hero-women.png" width="500px" height="400px" className='object-cover z-0' />
        </div>
      </div>
      {/*  clients section */}
      <div>
        <h4 className='text-2xl font-semibold text-center mt-6'>Trusted by enterprise sales teams globally</h4>

      </div>
    </section>
  )
}

export default MainComponent