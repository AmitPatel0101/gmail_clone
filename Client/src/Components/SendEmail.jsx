import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import messageContext from '../Context/messageContext'


const SendEmail = () => {
    const {open, setOpen} = useContext(messageContext);

  return (
    <div className={`${open ? "block" : "hidden"} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
        <div className=' flex items-center justify-between px-3 py-2 bg-[#F2F6FC]'>
            <h1>New Message</h1>
            <div onClick={() => setOpen(false)} className=' p-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                <RxCross2 size={"20px"}/>
            </div>
        </div>
        <form action="" className='flex flex-col p-3 gap-2'>
            <input type="text" placeholder='To' className='outline-none py-1'/>
            <input type="text" placeholder='Subject' className='outline-none py-1'/>
            <textarea rows={'13'} cols={'30'} className='outline-none py-1'></textarea>
        </form>
    </div>
  )
}

export default SendEmail