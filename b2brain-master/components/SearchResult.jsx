import Image from 'next/image'
import React from 'react'

const SearchResult = ({ data }) => {

  return (
    <section className='overflow-auto  pt-6 flex mx-auto flex-col md:flex-row h-[calc(100vh-50px)]'>
      {/*  main content */}
      <div className='md:w-[80%] w-full px-6'>
        <h4 className='font-semibold text-[22px] text-gray-400'>Similar accounts</h4>
        <section className='flex flex-wrap'>
          {
            data?.length === 0 &&
            <h4 className='py-4 text-center font-semibold text-slate-300 text-2xl'>
              Loading details , hold on.
            </h4>
          }
          {
            data?.map(item =>
              <div key={item?.company} className='md:w-[50%] w-full my-2 px-6 py-2 flex ' >
                {
                  item?.logo ?
                    <img src={item.logo} width="40px" height="40px" />
                    :
                    <span className='grid rounded-md place-items-center text-slate-100 font-bold w-[40px] h-[40px]' style={{ background: item?.color }}>
                      {item?.company[0]}
                    </span>
                }
                <span className='w-max ml-4 flex flex-col justify-center PY-3'>
                  <h5 className='text-md font-semibold'>{item?.company}</h5>
                  <a className='text-xs text-slate-400' href="/">{item?.website}</a>
                </span>
                <button className=' text-primary border border-primary ml-auto px-2 text-xs h-max py-1'>track</button>
              </div>
            )
          }
        </section>
      </div>
      <div className='w-full md:w-[20%] px-8 md:px-6 border-t  pt-4 md:mt-0 md:border-0 mt-6'>
        <h4 className='font-semibold text-[22px] text-gray-400 '>Quick actions</h4>
        <ul className='text-sm space-y-4 font-medium mt-3'>
          <li>Track new account</li>
          <li>Bulk track accounts</li>
          <li>Manage accounts</li>
        </ul>
      </div>

    </section>
  )
}

export default SearchResult