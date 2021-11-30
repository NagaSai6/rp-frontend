import "./Chat.css";
import send from "./images/paper-plane-regular.svg";
import Message from "./message/Message";
import jwt from "jsonwebtoken";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chat = (props) => {
  const token = localStorage.getItem("token");
  const user = jwt.decode(token);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState([]);
  console.log(props.trig);
  const ScrollRef = useRef();

  useEffect(() => {
    setCurrentChat(props.trig);
  }, [props.trig]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        let res = await axios.get(
          "https://richpanel-webhook-server.herokuapp.com/helpdesk/messages/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  console.log(messages);
  console.log(user.id);

  const handleSubmit = async (e) => {
    let message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
      image: user.image,
    };
    try {
      let res = await axios.post(
        "https://richpanel-webhook-server.herokuapp.com/helpdesk/message",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage(" ");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <h2> </h2>
      </div>
      {currentChat ? (
        <>
          <div className="chat-container-body">
            {messages.map((m) => {
              return <Message message={m} own={m.sender === user.id} />;
            })}
          </div>
          <div className="chat-container-input">
            <input
              type="text"
              className="chat-container-inputfeild"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div
              className="chat-container-trigger-button"
              onClick={handleSubmit}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="paper-plane"
                class="svg-inline--fa fa-paper-plane fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                ></path>
              </svg>
            </div>
          </div>{" "}
        </>
      ) : (
        <span className="chatnotification">No Conversation Selected</span>
      )}
    </div>
  );
};

export default Chat;
