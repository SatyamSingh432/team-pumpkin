import { IoSend } from "react-icons/io5";

import "../styles/ChatSection.css";
const ChatSection = () => {
  return (
    <div className="chat-sec-container">
      <nav className="chat-sec-nav">
        <div className="chat-sec-nav-icon">DM</div>
        <p className="chat-sec-nav-name">David Moore</p>
      </nav>
      <main className="msg-container">
        {/* ------------------------------------- */}
        <div className="chat-container">
          <div className="chat-date">Today</div>

          <div className="message-container left">
            <div className="message-box">
              <p className="msg-content">
                OMG do you remember what you did last night at the work night
                out?
              </p>
              <span className="message-time">8:12 am</span>
            </div>
          </div>

          <div className="message-container right">
            <div className="message-box sender">
              <p className="msg-content">no haha</p>
              <span className="message-time">18:16</span>
            </div>
          </div>

          <div className="message-container right">
            <div className="message-box sender">
              <p className="msg-content">i don&lsquo;t remember anything</p>
              <span className="message-time">18:16</span>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <form className="msg-container-input">
          <input type="text" name="" id="" placeholder="Message" />
          <button className="msg-send-btn">
            <IoSend className="msg-send-btn-icon" />
          </button>
        </form>
      </main>
    </div>
  );
};

export default ChatSection;
