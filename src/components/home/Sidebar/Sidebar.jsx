import logo from "./images/logo.png";
import group from "./images/group.svg";
import logout from "./images/logout.svg";
import "./sidebar.css";

import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

const SideBar = () => {
  const navigate = useNavigate();
  const triggerRedirect = () => {
    window.open("https://richpanel.com/", "_blank");
  };
  const signOut = (e) => {
    console.log(e)
    const token = localStorage.getItem("token");
    localStorage.removeItem(token);
    navigate("/login");
  };

  let token = localStorage.getItem("token")
  let user = jwt.decode(token)
  console.log(user)

  return (
    <div className="sidebar-container">
      <div className="sidebar-element" onClick={triggerRedirect}>
        <img className="sidebar-logo" src={logo} alt="Rich panel logo" />
      </div>
      <div className="sidebar-element sidebar-element-selected">
        <img src="https://img.icons8.com/ios/50/000000/new-message.png" />
      </div>
      <div className="sidebar-element">
        <img className="group" src={group} alt="group-users-icon" />
      </div>
      <div className="sidebar-element" onClick={signOut}>
        <img className="group" src={logout} alt="logout-botton-icon" />
      </div>
      <div className="sidebar-element sidebar-user">
        <img
          className="sidebar-user-profile-icon"
          src={user.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;
