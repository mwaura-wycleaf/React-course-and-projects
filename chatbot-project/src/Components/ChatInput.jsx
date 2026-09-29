import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css';

export function ChatInput( {chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
      setInputText(event.target.value)
  }

  async function sendMessage() {

    setInputText("");
    
    const newChatMessage = [
    ...chatMessages, {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID()
    }];
    setChatMessages(newChatMessage);

    const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
    ...newChatMessage, {
      message: response,
      sender: "robot",
      id: crypto.randomUUID()
    }]);

    
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