import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages([...messages, message]);
      });
    }
  }, [socket, messages]);

  function handleSubmit(event) {
    event.preventDefault();
    const newMessage = event.target.message.value;
    socket.emit("message", newMessage);
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
