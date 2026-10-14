import { useState, useEffect } from 'react'
import { ChatInput } from './Components/ChatInput.jsx'
import  ChatMessages  from './Components/ChatMessages.jsx'
import './App.css'


function App() {
       
        const [chatMessages, setChatMessages]= useState(JSON.parse(localStorage.getItem('messages'))|| []
        );

        useEffect (() => {
          localStorage.setItem('messages', JSON.stringify(chatMessages))
        }, [chatMessages]);
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
