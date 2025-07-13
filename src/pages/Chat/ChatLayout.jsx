import React from 'react'
import ChatList from '../../components/ChatList'
import { Outlet } from 'react-router-dom'

const ChatLayout = () => {
  return (
    <div className='grid grid-cols-12 gap-2'>
     
      <div className="col-span-9">
        <Outlet/>
      </div>
       <div className=" col-span-3">
        <ChatList/>
      </div>
    </div>
  )
}

export default ChatLayout
