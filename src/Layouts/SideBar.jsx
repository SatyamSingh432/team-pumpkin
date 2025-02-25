import ChatBar from "../components/ChatBar";
import { IoIosSearch } from "react-icons/io";

import logo from "../assets/image66.png";

import "../styles/SideBar.css";

const SideBar = () => {
  const peopleData = [
    {
      id: 1,
      name: "John Doe",
      time: "10:15 AM",
      message: "Hey, how are you?",
    },
    {
      id: 2,
      name: "Emma Smith",
      time: "11:30 AM",
      message: "Let's meet for coffee soon.",
    },
    {
      id: 3,
      name: "Michael Brown",
      time: "02:45 PM",
      message: "Did you get my email?",
    },
    {
      id: 4,
      name: "Sophia Davis",
      time: "04:10 PM",
      message: "See you at the event.",
    },
    {
      id: 5,
      name: "James Wilson",
      time: "06:00 PM",
      message: "I’ll call you later.",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      time: "08:20 PM",
      message: "Happy birthday, enjoy your day!",
    },
  ];

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
              className="chatbar-hover"
              key={data.id}
              chatName={data.name}
              chatMsg={data.message}
              chatTime={data.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
