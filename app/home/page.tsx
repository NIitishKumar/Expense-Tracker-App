import React from 'react'
import Header from '../header';

function index() {
    return (
        <div className='h-[100vh] bg-white'>
            <Header />
            <div className='bg-white px-[8%]'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-xl pb-8'>Transaction History</h1>
                    <h1 className='text-[#666666] cursor-pointer'>See all</h1>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img alt='upwork-img' src='upwork.svg' />
                            <div className='px-4'>
                                <h1 className='font-bold'>Upwork</h1>
                                <p>Today</p>
                            </div>
                        </div>
                        <div className='my-auto text-[#25A969]'>
                            <h1 className='font-bold text-md md:text-2xl'>+₹89,999</h1>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img alt='upwork-img' src='upwork.svg' />
                            <div className='px-4'>
                                <h1 className='font-bold'>Upwork</h1>
                                <p>Today</p>
                            </div>
                        </div>
                        <div className='my-auto text-[#F95B51]'>
                            <h1 className='font-bold text-md md:text-2xl'>-₹80,999</h1>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img alt='upwork-img' src='upwork.svg' />
                            <div className='px-4'>
                                <h1 className='font-bold'>Upwork</h1>
                                <p>Today</p>
                            </div>
                        </div>
                        <div className='my-auto text-[#25A969]'>
                            <h1 className='font-bold text-md md:text-2xl'>+₹89,999</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index;