import React, { useEffect, useState, memo } from "react";
import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import Pusher from "pusher-js";
import axios from "axios";
import { useStateValue } from "./StateProvider";

const Chat = ({ messages, chatRoom, seed }) => {
  const roomName = chatRoom;
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://chat-app-4153.herokuapp.com/messages/new", {
      message: input,
      name: user?.email,
      receiver: chatRoom.correspondent,
      timestamp: new Date().toUTCString(),
      received: null,
    });
    setInput("");
  };

  useEffect(() => {
    //chatBody div always on first chat
    const chatBody = document.getElementsByClassName("chatBody");
    const scrollHeight = chatBody[0].scrollHeight;
    const clientHeight = chatBody[0].clientHeight;
    const clientScroll = scrollHeight - clientHeight;
    chatBody[0].scrollTop = clientScroll;
  });

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>{new Date().toUTCString()}</p>
        </div>
        <div className="chat__headerRight">
          <AttachFile />
          <MoreVert />
          <SearchOutlined />
        </div>
      </div>

      <div className="chatBody">
        {messages.map((message) => {
          return (
            <p
              key={Math.random()}
              className={
                message.name === user?.email
                  ? "chat__message chat__receiver"
                  : "chat__message"
              }
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__time">{message.timestamp}</span>
            </p>
          );
        })}

        <div className="chat__inputArea">
          <div className="chat__inputContainer">
            <InsertEmoticon />
            <form className="chat__form" onSubmit={handleSubmit}>
              <textarea
                onChange={(e) => setInput(e.target.value)}
                rows="2"
                value={input}
                className="chat__input"
                type="text"
                placeholder="Type a message..."
              />
              <button className="chat__formButton">
                <SendIcon padding="0" fontSize="small" />
              </button>
            </form>

            <MicIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Chat);
