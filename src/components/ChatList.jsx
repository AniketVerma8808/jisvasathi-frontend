import { Search } from 'lucide-react';
import React, { useState } from 'react'

const ChatList = () => {
     const [activeChat, setActiveChat] = useState(1);
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
  const activeContact = contacts.find((contact) => contact.id === activeChat);
  return (
    <div>
       <div className="w-80 min-h-screen bg-white border-r border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveChat(contact.id)}
                className={`p-3 flex items-start gap-3 cursor-pointer hover:bg-gray-50 ${
                  activeChat === contact.id ? "bg-amber-200" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={contact.image || "/placeholder.svg"}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{contact.name}</h3>
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
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ChatList
