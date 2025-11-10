import { PanelRightClose, Search, Sliders } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getContacts } from '../services/api.service';
import {useQuery} from '@tanstack/react-query'
const ChatList = ({showChatList,setShowChatList}) => {
     const [activeChat, setActiveChat] = useState(1);

  //   {
  //     id: 1,
  //     name: "Jessica Parker",
  //     lastMessage: "I'd love to meet for coffee sometime",
  //     time: "10:30 AM",
  //     unread: 2,
  //     online: true,
  //     image: "/placeholder.svg?height=50&width=50",
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     lastMessage: "What are your hobbies?",
  //     time: "Yesterday",
  //     unread: 0,
  //     online: false,
  //     image: "/placeholder.svg?height=50&width=50",
  //   },
  //   {
  //     id: 3,
  //     name: "Priya Sharma",
  //     lastMessage: "Nice to meet you!",
  //     time: "Yesterday",
  //     unread: 0,
  //     online: true,
  //     image: "/placeholder.svg?height=50&width=50",
  //   },
  // ];
  // const activeContact = contacts.find((contact) => contact.id === activeChat);
   const {data,isLoading,isError}= useQuery(({
     queryKey:['contacts'],
    queryFn: getContacts
   }))

   
  return (
   
       <div className=" h-full bg-amber-50 border-r border-gray-200 flex flex-col">
          <div className="p-4.5 border-b border-gray-200 text-lg text-amber-600 max-sm:p-5 font-semibold text-center flex items-center justify-start">
           <PanelRightClose onClick={()=>setShowChatList(!showChatList)} className='max-xl:block hidden'/>
            <h1 className=' flex-grow max-sm:hidden'>Your Chats</h1>
          </div>

          <div className="flex-1 overflow-y-auto">
            {data?.data?.contacts?.map((contact) => (
              <Link to={'/profile/chats/chatpage'}
                key={contact._id}
                state={contact}
                onClick={() => {
                  setShowChatList(!showChatList);
                  setActiveChat(contact._id)}}
                className={`p-2 flex items-start gap-3 cursor-pointer hover:bg-gray-50 ${
                  activeChat === contact._id ? "bg-amber-100" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={contact.profile.profilePhotos[0] || "/placeholder.svg"}
                    alt={contact.fullName}
                    className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full object-cover bg-white border border-amber-200"
                  />
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{contact.fullName}</h3>
                    <span className="text-xs text-gray-500">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {contact.lastMessage}
                  </p>
                </div>

                {contact.unread > 0 && (
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">
                      {contact.unread}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
  
  )
}

export default ChatList
