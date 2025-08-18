import React from 'react'
import ChatList from '../../components/ChatList'
import { Outlet } from 'react-router-dom'

const ChatLayout = () => {
  return (
    <div className='grid h-full bg-gray-100 overflow-x-hidden grid-cols-12 gap-2 relative z-80'>
     
      <div className="col-span-9 h-full">
        <Outlet/>
      </div>
       <div className=" col-span-3 h-full">
        <ChatList/>
      </div>
    </div>
  )
}

export default ChatLayout
