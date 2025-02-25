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
      messages: [
        { sender: "John Doe", message: "Hey, how are you?", time: "10:15 AM" },
        {
          sender: "You",
          message: "I'm good, how about you?",
          time: "10:17 AM",
        },
      ],
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
    },
    {
      id: 2,
      name: "Emma Smith",
      messages: [
        {
          sender: "Emma Smith",
          message: "Let's meet for coffee soon.",
          time: "11:30 AM",
        },
        { sender: "You", message: "Sounds great! When?", time: "11:32 AM" },
      ],
      email: "emma.smith@example.com",
      phone: "+1 234-567-8901",
    },
    {
      id: 3,
      name: "Michael Brown",
      messages: [
        {
          sender: "Michael Brown",
          message: "Did you get my email?",
          time: "02:45 PM",
        },
        { sender: "You", message: "Yes, I'll reply soon.", time: "02:47 PM" },
      ],
      email: "michael.brown@example.com",
      phone: "+1 345-678-9012",
    },
    {
      id: 4,
      name: "Sophia Davis",
      messages: [
        {
          sender: "Sophia Davis",
          message: "See you at the event.",
          time: "04:10 PM",
        },
        {
          sender: "You",
          message: "Yes! Looking forward to it.",
          time: "04:12 PM",
        },
      ],
      email: "sophia.davis@example.com",
      phone: "+1 456-789-0123",
    },
    {
      id: 5,
      name: "James Wilson",
      messages: [
        {
          sender: "James Wilson",
          message: "I’ll call you later.",
          time: "06:00 PM",
        },
        { sender: "You", message: "Okay, talk soon.", time: "06:02 PM" },
      ],
      email: "james.wilson@example.com",
      phone: "+1 567-890-1234",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      messages: [
        {
          sender: "Olivia Taylor",
          message: "Happy birthday, enjoy your day!",
          time: "08:20 PM",
        },
        { sender: "You", message: "Thank you so much!", time: "08:22 PM" },
      ],
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
