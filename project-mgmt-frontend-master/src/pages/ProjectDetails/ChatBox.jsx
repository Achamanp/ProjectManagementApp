import React, { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Avatar,
  AvatarFallback
} from '@/components/ui/avatar'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

const ChatBox = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Ram', text: 'How are you?', isOwn: false },
    { id: 2, sender: 'You', text: 'I am doing great, thanks!', isOwn: true },
    { id: 3, sender: 'Ram', text: 'That\'s wonderful to hear!', isOwn: false },
    { id: 4, sender: 'You', text: 'How about you?', isOwn: true },
  ])

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        text: message,
        isOwn: true
      }
      setMessages([...messages, newMessage])
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className='sticky'>
      <div className='border rounded-lg'>
        <h1 className='border-b p-5 font-semibold'> Chat Box </h1>
   <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {[1,1,1,1,].map((item,index)=>(
            index%2===0?<div className='flex gap-2 mb-2 justify-start' key={item}>
            <Avatar>
              <AvatarFallback>R</AvatarFallback>

            </Avatar>
              <div className='space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl'>
                <p>Ram</p>
                <p className='text-gray-300'>How are you ?</p>
              </div>
          </div>:
          <div className='flex gap-2 mb-2 justify-end'  key={item}>

              <div className='space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl'>
                <p>Ram</p>
                <p className='text-gray-300'>How are You ?</p>
              </div>
               <Avatar>
              <AvatarFallback>R</AvatarFallback>

            </Avatar>
          </div>
          ))}

        </ScrollArea>
        <div className='relative p-5 border-t'>
          <Input
            placeholder="Type message..."
            className="pr-12"
            value={message} 
            onChange={handleMessageChange}
            onKeyPress={handleKeyPress}
          />
          <Button 
            onClick={handleSendMessage} 
            className="absolute right-7 top-1/2 transform -translate-y-1/2 rounded-full" 
            size="icon" 
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox