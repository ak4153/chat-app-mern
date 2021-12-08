import "./Sidebar.css";
import React, { useEffect, useState, useReducer } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, Icon, IconButton } from "@material-ui/core";
import Searchbar from "./Searchbar.js";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";
import axios from "axios";

const Sidebar = ({ handleClickRoom, seed, chatRoom }) => {
  const [{ user }, dispacth] = useStateValue();
  const [sperm, setSperm] = useState(null);
  // const [chatRoomdb, setChatRoomdb] = useState({});
  useEffect(() => {
    setSperm(Math.floor(Math.random() * 5000));
  }, []);

  // useEffect(() => {
  //   axios
  //     .post("https://chat-app-4153.herokuapp.com/chatRooms/sync", {
  //       email: user,
  //     })
  //     .then((res) => {
  //       const data = res.data;
  //       setChatRoomdb({
  //         owner: data.owner.user,
  //         messages: data.messages,
  //         correspondent: data.correspondent.user,
  //       });
  //       console.log("res", data);
  //     });
  // }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/b${sperm}.svg`} />
        <div className="sidebar__userNameContainer">
          <h4 className="sidebar__userName">{user?.displayName}</h4>
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <Searchbar></Searchbar>
      </div>
      <div className="sidebar__chats">
        <SidebarChat
          chatRoom={"Room 1"}
          seed={seed}
          handleClickRoom={handleClickRoom}
        />
      </div>
    </div>
  );
};

export default Sidebar;
