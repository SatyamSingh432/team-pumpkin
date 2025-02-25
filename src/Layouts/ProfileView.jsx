/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import "../styles/ProfileView.css";
const ProfileView = ({ individualData, setShowProfile }) => {
  const iconName = (data) => {
    let arr = data.split(" ");
    let newArr = new Array(2);
    for (let ele of arr) {
      newArr.push(ele[0]);
    }
    return newArr.join("");
  };
  return (
    <div className="profile-view-container">
      <RxCross2
        className="cross-icon"
        onClick={() => {
          setShowProfile(false);
        }}
      />
      <div className="profile-view-icon">{iconName(individualData.name)}</div>
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
