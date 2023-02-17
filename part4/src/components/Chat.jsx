import React from "react";
import { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const newMessage = event.target.message.value;
    setMessages([...messages, newMessage]);
    event.target.reset();
  }
  return (
    <div className="container">
      <div className="app__container">
        <h2>Chat</h2>
        <div className="app_message__container">
          {messages.map((message, index) => (
            <span className="app__message" key={index}>
              <p>{message}</p>
            </span>
          ))}
        </div>
        <hr />
        <div className="input_box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
