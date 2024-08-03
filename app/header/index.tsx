import React from 'react'

function Header() {
    return (
        <div className='h-[20%] bg-[#3F8782] p-8 w-full text-white mb-[38%] md:mb-[10%]'>
            <div className='relative flex justify-between'>
                <div className=''>
                    <p>Good Afternoon</p>
                    <h1 className='font-bold tracking-widest'>NITISH KUMAR</h1>
                </div>
                <div className=''>
                    <img alt='notification' src='./notification.svg' />
                </div>
            </div>
            <div className='bg-[#1B5C58] p-6 rounded-xl mt-[3%] leading-7 block md:flex justify-between absolute top-[10%] left-0 right-0 mx-auto w-[93%] md:w-[85%] shadow-2xl'>
                <div>
                    <h2 className='font-bold'>Total Balance</h2>
                    <h1 className=''>₹89,999</h1>
                </div>
                <div className='flex justify-between w-full md:w-[30%] mt-4 md:m-0'>
                    <div>
                        <h2 className='font-bold'>Income</h2>
                        <h1 className=''>₹80,999</h1>
                    </div>
                    <div>
                        <h2 className='font-bold'>Expenses</h2>
                        <h1 className=''>₹90,999</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header