import "./home.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

import SideBar from "./Sidebar/Sidebar";
import Conversation from "./Conversations/Conversation";
import Chat from "./Chat/Chat";
import ActiveUser from "./Activeuser/ActiveUser";

const HomeHandler = () => {
  const navigate = useNavigate();
  const [trigger,setTrigger]=useState(null);

  const clickHandler = (e)=>{
       setTrigger(e)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      var user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem(token);
        navigate("/login");
      }
    }
  }, [localStorage]);
  

  return (
    <div className="global-container">
      <SideBar />
      <Conversation  func={clickHandler} />
      <Chat trig={trigger}/>
      <ActiveUser Ac={trigger}/>
    </div>
  );
};

export default HomeHandler;
