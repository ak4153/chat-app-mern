import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";

import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "axios";
const Login = () => {
  //const [{}, dispatch] = {useReducer(reducer, initialState)}
  const [{}, dispatch] = useStateValue();

  function signIn(params) {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
        axios.post("https://chat-app-4153.herokuapp.com/signIn", {
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="whatsapp" />
        <div className="login__text">
          <h2>Login please...</h2>
        </div>
        <Button onClick={signIn} className="login__button">
          Login please...
        </Button>
      </div>
    </div>
  );
};
export default Login;
