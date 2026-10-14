import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage.jsx'
import dayjs from 'dayjs';
import './ChatMessages.css'

function ChatMessages({chatMessages}) {
  const chatMessagesRef = useRef(null)
  let time = dayjs().valueOf();
  let theTime = dayjs(time).format('h:mma');
  


  useEffect(() => {
    const containerElem = chatMessagesRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
    
  return (
    <div className = "chat-messages-container" ref = {chatMessagesRef}>
      {chatMessages.length === 0 ? (<p>Welcome to the chatbot project! Send a message using the textbox below</p>): (
        chatMessages.map((chatMessage) => {
          return (
            <div key = {chatMessage.id}>
              <ChatMessage message = {chatMessage.message} sender = {chatMessage.sender}><p class = "time">{theTime}</p></ChatMessage>
              
            </div>
          )
        })
      )}
     
    </div>
  );
}

export default ChatMessages;