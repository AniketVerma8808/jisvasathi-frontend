"use client";

import { useState } from "react";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  MessageSquare,
} from "lucide-react";

export default function MessengerContent() {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");

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

  const messages = [
    {
      id: 1,
      senderId: 1,
      text: "Hi there! I noticed we have a lot in common.",
      time: "10:15 AM",
    },
    {
      id: 2,
      senderId: "me",
      text: "Hello! Yes, I noticed that too. I see you enjoy hiking?",
      time: "10:17 AM",
    },
    {
      id: 3,
      senderId: 1,
      text: "Yes! I try to go hiking at least once a month. What about you?",
      time: "10:20 AM",
    },
    {
      id: 4,
      senderId: "me",
      text: "I love hiking too! I usually go every other weekend when the weather is nice. I'd love to hear about your favorite trails.",
      time: "10:25 AM",
    },
    {
      id: 5,
      senderId: 1,
      text: "I'd love to meet for coffee sometime and talk more about our hiking adventures!",
      time: "10:30 AM",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // In a real app, you would send this message to your backend
    console.log("Sending message:", message);
    setMessage("");
  };

  const activeContact = contacts.find((contact) => contact.id === activeChat);

  return (
    <div className="h-screen flex flex-col bg-white  ml-auto  max-lg:w-full max-xl:mt-18">
      <div className="flex h-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        {/* Contacts sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
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
                  activeChat === contact.id ? "bg-rose-50" : ""
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
                  <div className="flex-shrink-0 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">
                      {contact.unread}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {activeContact ? (
            <>
              {/* Chat header */}
              <div className="p-3 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={activeContact.image || "/placeholder.svg"}
                      alt={activeContact.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {activeContact.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{activeContact.name}</h3>
                    <p className="text-xs text-gray-500">
                      {activeContact.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Phone size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Video size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreHorizontal size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.senderId === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.senderId === "me"
                          ? "bg-rose-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.senderId === "me"
                            ? "text-rose-100"
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
              <div className="p-3 bg-white border-t border-gray-200">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-2"
                >
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Paperclip size={18} className="text-gray-600" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Smile size={18} className="text-gray-600" />
                  </button>
                  <button
                    type="submit"
                    className="p-2 bg-rose-500 text-white rounded-full hover:bg-rose-600"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} className="text-rose-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Your Messages
                </h3>
                <p className="text-gray-500 mt-1">
                  Select a conversation to start chatting
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
