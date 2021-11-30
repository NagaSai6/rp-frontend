import "./login.css";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const LoginHandler = () => {
  const navigate = useNavigate();
  const responseFacebook = async (response) => {
    console.log(response);
    let url = "https://richpanel-webhook-server.herokuapp.com/helpdesk/login";
   await axios
      .post(url, response)
      .then((res) => {
        if (res.data.user) {
          localStorage.setItem('token', res.data.user)
          alert('Login successful')
          navigate("/");
        } else {
          alert('Login Failed')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mainDiv">
      <div className="mainDiv-image">
        <img
          src="https://richpanel.com/wp-content/uploads/sites/11/2020/06/Richpanel_logo_colored.svg"
          alt="logo"
          height="100px"
          width="200px"
        ></img>
      </div>
      <div>
        <div>
          <div className="fbButton">
            <FacebookLogin
              appId="1609077519436644"
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHandler;
