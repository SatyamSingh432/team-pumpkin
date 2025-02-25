import SideBar from "../Layouts/SideBar";
import ChatSection from "../Layouts/ChatSection";
import ProfileView from "../Layouts/ProfileView";

import "../styles/ChatPage.css";
const ChatPage = () => {
  return (
    <div className="chat-page-container">
      <div className="chat-page-child-container">
        <SideBar />
        <ChatSection />
        <ProfileView />
      </div>
    </div>
  );
};

export default ChatPage;
