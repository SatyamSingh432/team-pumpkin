import { useState } from "react";
import SideBar from "../Layouts/SideBar";
import ChatSection from "../Layouts/ChatSection";
import ProfileView from "../Layouts/ProfileView";

import "../styles/ChatPage.css";
const ChatPage = () => {
  const peopleData = [
    {
      id: 1,
      name: "John Doe",
      time: "10:15 AM",
      message: "Hey, how are you?",
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
    },
    {
      id: 2,
      name: "Emma Smith",
      time: "11:30 AM",
      message: "Let's meet for coffee soon.",
      email: "emma.smith@example.com",
      phone: "+1 234-567-8901",
    },
    {
      id: 3,
      name: "Michael Brown",
      time: "02:45 PM",
      message: "Did you get my email?",
      email: "michael.brown@example.com",
      phone: "+1 345-678-9012",
    },
    {
      id: 4,
      name: "Sophia Davis",
      time: "04:10 PM",
      message: "See you at the event.",
      email: "sophia.davis@example.com",
      phone: "+1 456-789-0123",
    },
    {
      id: 5,
      name: "James Wilson",
      time: "06:00 PM",
      message: "I’ll call you later.",
      email: "james.wilson@example.com",
      phone: "+1 567-890-1234",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      time: "08:20 PM",
      message: "Happy birthday, enjoy your day!",
      email: "olivia.taylor@example.com",
      phone: "+1 678-901-2345",
    },
  ];
  const [showProfile, setShowProfile] = useState(false);

  const [openChat, setOpenChat] = useState(peopleData[0]);
  console.log(openChat);
  return (
    <div className="chat-page-container">
      <div className="chat-page-child-container">
        <SideBar peopleData={peopleData} setIndividualData={setOpenChat} />
        <ChatSection
          individualData={openChat}
          setShowProfile={setShowProfile}
        />
        {showProfile && (
          <ProfileView
            individualData={openChat}
            setShowProfile={setShowProfile}
          />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
