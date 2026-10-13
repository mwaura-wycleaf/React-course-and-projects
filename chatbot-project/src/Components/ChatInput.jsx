import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import loadingSpinner from "../assets/loading-spinner.gif"
import './ChatInput.css';

export function ChatInput( {chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
      setInputText(event.target.value)
  }

  async function sendMessage() {
    if(isLoading || inputText === "") {
      return
    }
    setIsLoading(true);
    setInputText("");

    const loadingMessageId = crypto.randomUUID();
    
    const newChatMessage = [
    ...chatMessages, {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID()
    }, {
      message: <img className = "loadingSpinner" src = {loadingSpinner} />,
      sender: "robot",
      id: loadingMessageId
    }];
    setChatMessages(newChatMessage);

    const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages(prevMessages => prevMessages.map(msg => msg.id === loadingMessageId ? {...msg, message: response} : msg));

    setIsLoading(false);
  }

    function keyDown(event){
      (event.key === "Enter") ? sendMessage() : (event.key === "Escape" ? setInputText("") : null);
    }
  return (
    <div className = "chat-input-container">
      <input 
        placeholder = "Send a message to Chatbot" 
        size = "30" onChange = {saveInputText} value = {inputText}
        className = "chat-input" onKeyDown = {keyDown}
        />
      <button onClick = {sendMessage} className = "send-button">Send</button>
    </div>
  );
}