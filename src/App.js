import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Pusher from "pusher-js";
import React, {
  useEffect,
  useState,
  memo,
  useMemo,
  useLayoutEffect,
  useReducer,
} from "react";
import axios from "axios";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { StateProvider } from "./components/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  const [messages, setmessages] = useState([]);
  const [task, setTask] = useState(true);
  const [chatRoom, setChatRoom] = useState();
  const [avatarIcon, setAvatarIcom] = useState();

  useEffect(() => {
    axios
      .get("https://chat-app-4153.herokuapp.com/messages/sync")
      .then((res) => {
        setmessages(res.data);
      });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("6c541fa634822d115415", {
      cluster: "eu",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setmessages([...messages, data]);
      console.log("triger>>>", messages);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  useEffect(() => {
    console.log("refreshed");
  }, [chatRoom]);

  function handleClickRoom(room) {
    setChatRoom(room);
    console.log("clicked", chatRoom);
  }
  function seed() {
    const rand = Math.floor(Math.random() * 5000);
    setAvatarIcom(rand);
  }
  return (
    <>
      {user ? (
        <div className="app">
          <h3>Chat app </h3>
          <div className="app__body">
            <Sidebar
              seed={avatarIcon}
              handleClickRoom={handleClickRoom}
              chatRoom={chatRoom}
            ></Sidebar>
            {chatRoom ? (
              <Chat seed={avatarIcon} messages={messages} chatRoom={chatRoom} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default memo(App);
