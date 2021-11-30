import "./Convo.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Convo = (props) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const customerId = props.param.members.find((m) => m != props.currUser);

    const getUser = async () => {
      try {
        const res = await axios(
          `https://richpanel-webhook-server.herokuapp.com/helpdesk/customers/${customerId}`
        );
        setCustomer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [props.param, props.currUser]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={customer ? customer.profile_pic : "https://picsum.photos/200/200"}
        alt=""
      />
      <span className="conversationName">
        {customer ? customer.first_name + " "+ customer.last_name : ""}
      </span>
    </div>
  );
};

export default Convo;
