import { RxCross2 } from "react-icons/rx";
import "../styles/ProfileView.css";
const ProfileView = () => {
  return (
    <div className="profile-view-container">
      <RxCross2 className="cross-icon" />
      <div className="profile-view-icon">hd</div>
      <div className="profile-view-info">
        <div className="profile-view-name">Daina Moore</div>
        <div className="profile-view-no">+2342342433432</div>
        <div className="profile-view-email">dianamoore@gmail.com</div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default ProfileView;
