import { useQuery } from '@tanstack/react-query';
import { Paperclip, Send, Smile } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { getMessages, sendMessages } from '../services/api.service';
import { useLocation, useSearchParams } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import socket from '../services/socketInstance';

const ChatPage = () => {
  const {user}= useSearchParams((state)=>state.user)
      const [activeChat, setActiveChat] = useState(1);
      const [emojiPicker, setEmojiPicker] = useState(false);
  const [message, setMessage] = useState(""); 
  const [messages, setmessages] = useState();
  const location=useLocation()
  const contacts = [
    {
      id: 1,
      name: "Jessica Parker",
      lastMessage: "I'd love to meet for coffee sometime",
      time: "10:30 AM",
      unread: 2,
      online: true,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Michael Chen",
      lastMessage: "What are your hobbies?",
      time: "Yesterday",
      unread: 0,
      online: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Priya Sharma",
      lastMessage: "Nice to meet you!",
      time: "Yesterday",
      unread: 0,
      online: true,
      image: "/placeholder.svg?height=50&width=50",
    },
  ];



  const handleSendMessage = async(e) => {
    e.preventDefault();
    if (message.trim() === "") return;
try {
     socket.emit('sendMessage',{text:message,profileId:location.state._id})
     const res= await sendMessages(location.state._id,{text:message})
     setMessage('')
     callGetMessageAPI()
} catch (error) {
  console.log(error)
}

  
  };
  useEffect(() => {
   socket.on('replyMessage',(message)=>{
    
      setmessages((prev)=>[...prev,{text:message}])
   })
  }, [])

  const handleEmoji=(e)=>{
    const emoji=e.emoji
    setMessage((prev)=>prev+emoji)
  }
 
  async function callGetMessageAPI(){
try {
       const res= await getMessages(location.state._id)
       setmessages(res.data.messages)
} catch (error) {
  console.log(error)
}
     
  }

  useEffect(() => {
     callGetMessageAPI()
  }, [location.state._id])

  const chatRef= useRef(null)
    useEffect(()=>{
    chatRef.current.scrollTop=chatRef.current.scrollHeight
  },[messages])
 console.log(location.state)
  const activeContact = contacts.find((contact) => contact.id === activeChat);
  return (
   
      <div className="flex-1 h-full  flex flex-col bg-gray-50">
          {activeContact ? (
            <>
              {/* Chat header */}
              <div className="p-3 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={location?.state?.profile?.profilePhotos[0] || "/placeholder.svg"}
                      alt={location.state.fullName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {activeContact.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{location.state.fullName}</h3>
                    <p className="text-xs text-gray-500">
                      {activeContact.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>

              </div>

              {/* Messages */}
              <div ref={chatRef} className="flex-1 overflow-y-scroll max-h-[calc(100vh-216px)] p-4 space-y-4 custom-scrollbar">
                {messages?.map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex ${
                      msg.userId !== location.state._id ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.senderId === "me"
                          ? "bg-amber-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.senderId === "me"
                            ? "text-amber-100"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="p-3 bg-white border-t border-gray-200 relative">
                <div className='absolute bottom-full right-0 '>
                  <EmojiPicker open={emojiPicker} onEmojiClick={handleEmoji} searchDisabled={true}/>
                </div>
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-2"
                >
                
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                      setEmojiPicker(false)                   
                    }}
                    placeholder="Type a message..."
                    className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={()=>setEmojiPicker(!emojiPicker)}
                  >
                    <Smile size={18} className="text-gray-600" />
                  </button>
                  <button
                    type="submit"
                    className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} className="text-amber-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Your Messages
                </h3>
                <p className="text-gray-500 mt-1">
                  
                </p>
              </div>
            </div>
          )}
        </div>
   
  )
}

export default ChatPage
