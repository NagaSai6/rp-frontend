import "./Message.css";

import {DateTime} from 'luxon';

const Message = (props) => {
const isoString = props.message.createdAt
const formatted = DateTime
  .fromISO(isoString)
  .toLocaleString(DateTime.DATETIME_MED);


  return (
    <div className={props.own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={props.message.image}
          alt=""
        />
        <p className="messageText">{props.message.text}</p>
      </div>
      <div className="messageBottom">{formatted}</div>
    </div>
  );
};

export default Message;
