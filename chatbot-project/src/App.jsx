import { useState } from 'react'
import { ChatInput } from './Components/ChatInput.jsx'
import  ChatMessages  from './Components/ChatMessages.jsx'
import './App.css'


function App() {
       
        const [chatMessages, setChatMessages]= useState([{
          message: "hello chatbot",
          sender: "user",
          id: "id1"
        }, {
          message: "Hello! How can i help you?",
          sender: "robot",
          id: "id2"
        }, {
          message: "can you get me today's date",
          sender: "user",
          id: "id3"
        }, {
          message: "Today is September 23",
          sender: "robot",
          id: "id4"
        }]
        );
        //const [chatMessages, setChatMessages] = array;
        //const chatMessages = array[0];
        //const setChatMessages = array[1];
        return (
          <div className = "app-container">
            
            <ChatMessages chatMessages = {chatMessages} />
            <ChatInput chatMessages = {chatMessages} setChatMessages = {setChatMessages} />
          </div>
        )
      }
export default App
