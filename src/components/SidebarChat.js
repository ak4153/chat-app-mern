import React, { useEffect, useReducer, useState } from "react";
import { Avatar, Icon, IconButton } from "@material-ui/core";
import "./SidebarChat.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";
// function seedReducer(params) {
//   const rand = Math.floor(Math.random() * 5000);
//   return rand;
// }

const SidebarChat = ({ seed, handleClickRoom, chatRoom }) => {
  const [{ user }, dispatch] = useStateValue();
  // const [chatRoom, setChatRoom] = useState({});
  const [sperm, setSperm] = useState(null);

  // useEffect(() => {
  //   axios
  //     .post("https://chat-app-4153.herokuapp.com/chatRooms/sync", {
  //       email: user,
  //     })
  //     .then((res) => {
  //       const data = res.data;
  //       setChatRoom({
  //         owner: data.owner.user,
  //         messages: data.messages,
  //         correspondent: data.correspondent.user,
  //       });
  //       console.log("res", chatRoom);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("sidebarchat");
  //   console.log(chatRoom);
  // }, [chatRoom]);

  return (
    //TODO CREATE CHAT ROOM
    <div className="sideBarChat">
      <Avatar
        className="sideBarChat__avatar"
        src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}
      />
      <div
        className="sideBarChat__info"
        onClick={() => handleClickRoom(chatRoom)}
      >
        <h3>{chatRoom}</h3>
        <p>
          {chatRoom.messages
            ? chatRoom.messages[chatRoom.messages.length - 1]
            : ""}
        </p>
      </div>
    </div>
  );
};

export default SidebarChat;
