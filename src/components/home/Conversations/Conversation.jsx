import "./Conversation.css";
import bars from "./images/bars.svg";
import reload from "./images/reload.svg";
import Convo from "./Convos/Convo";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const Conversation = (props) => {



  const refresh = () => {
    window.document.location.reload();
  };
  const [conversations, setConversations] = useState([]);
  // const [checkConversations,setCheckConversations]=useState(true);

  const token = localStorage.getItem("token");
  const user = jwt.decode(token);
  let id = user.id;

  useEffect(() => {
    const getConversations = async () => {
      let url = `https://richpanel-webhook-server.herokuapp.com/helpdesk/${id}`;
     await axios
        .get(url)
        .then((res) => {
          // console.log(res.data)
          setConversations(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getConversations();
  }, [id]);

  return (
    <div className="conversations-container">
      <div className="conversations-header">
        <img className="conversations-baricon" src={bars} alt="bar-icon" />
        <h1 className="conversations-title">Conversations</h1>
        <div className="conversations-refresh-button" onClick={refresh}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="redo-alt"
            class="svg-inline--fa fa-redo-alt fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"
            ></path>
          </svg>
        </div>
      </div>
      { conversations.length === 0 ? <span className="conversationEr">No conversations Found</span>:
      conversations.map((c)=> <div  key={c._id} onClick={()=>{props.func(c)}}> <Convo key={c._id} param={c} currUser={id}/> </div>) 
      }
   
    </div>
  );
};

export default Conversation;
