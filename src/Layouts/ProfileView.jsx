/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import "../styles/ProfileView.css";
const ProfileView = ({ individualData, setShowProfile }) => {
  return (
    <div className="profile-view-container">
      <RxCross2
        className="cross-icon"
        onClick={() => {
          setShowProfile(false);
        }}
      />
      <div className="profile-view-icon">hd</div>
      <div className="profile-view-info">
        <div className="profile-view-name">{individualData.name}</div>
        <div className="profile-view-no">{individualData.phone}</div>
        <div className="profile-view-email">{individualData.email}</div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default ProfileView;
