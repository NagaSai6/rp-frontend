import "./ActiveUser.css";
import img from './index.jpeg'

const ActiveUser = (props) => {







  
  return (
    <div className="homeCurrentUser">
      <div className="homeCurrentUserProfile">
        <img
          src={img}
          className="homeCurrentUserProfileImage"
          alt="user-profile"
        />
        <h3 className="activeUserName">Naga Sai</h3>
        <h5 style={{ margin: 0 }}>Online</h5>
        <div class="profile-card-ctr">
        <button class="profile-card__button button--blue js-message-btn">
        <i class="fas fa-phone-volume"></i>
          <span className="activeUseI">Phone</span>
          </button>
        <button class="profile-card__button button--orange">
        <i class="fas fa-user-circle"></i>
        <span className="activeUseI">Profile</span>
        </button>
      </div>
      </div>
      <div className="homeCurrentUserProfileDetails">
        <h3 style={{ margin: 0, marginBottom: 20 ,fontFamily:'Proza'}}>Customer Details</h3>
        <div className="homeCurrentUserProfileDetailsItem">
          <h4 style={{ margin: 0, opacity: 0.6, marginBottom: 10 }}>Email</h4>
          <h4 style={{ margin: 0 }}>cantfetch@gmail.com</h4>
        </div>
        <div className="homeCurrentUserProfileDetailsItem">
          <h4 style={{ margin: 0, opacity: 0.6, marginBottom: 10 }}>
            First Name
          </h4>
          <h4 style={{ margin: 0 }}>Naga</h4>
        </div>
        <div className="homeCurrentUserProfileDetailsItem">
          <h4 style={{ margin: 0, opacity: 0.6, marginBottom: 10 }}>
            Last Name
          </h4>
          <h4 style={{ margin: 0 }}>Sai</h4>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
