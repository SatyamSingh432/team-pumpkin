/* eslint-disable react/prop-types */
import ChatBar from "../components/ChatBar";
import { IoIosSearch } from "react-icons/io";

import logo from "../assets/image66.png";

import "../styles/SideBar.css";

const SideBar = ({ peopleData, setIndividualData }) => {
  return (
    <div className="side-bar">
      <div className="sidebar-header-container">
        <div className="sidebar-header-icon">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar-input-container">
          <input
            className="sidebar-input"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <IoIosSearch className="react-icon-search" />
        </div>
      </div>
      <div className="sidebar-second-container">
        {peopleData.map((data) => {
          return (
            <ChatBar
              setIndividualData={setIndividualData}
              className="chatbar-hover"
              key={data.id}
              chatName={data.name}
              chatMsg={data.messages[0].message}
              chatTime={data.messages[0].time}
              fullData={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
