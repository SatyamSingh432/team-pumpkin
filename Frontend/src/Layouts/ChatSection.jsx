/* eslint-disable react/prop-types */
import { IoSend } from "react-icons/io5";
import { useState } from "react";

import "../styles/ChatSection.css";
const ChatSection = ({ individualData, setShowProfile }) => {
  const [msgSend, setMsgSend] = useState([]);
  const [msg, setMsg] = useState("");

  const iconName = (data) => {
    let arr = data.split(" ");
    let newArr = new Array(2);
    for (let ele of arr) {
      newArr.push(ele[0]);
    }
    return newArr.join("");
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (msg.trim() === "") return;
    setMsgSend((prvData) => [
      ...prvData,
      {
        message: msg,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      },
    ]);
    setMsg("");
  };

  const changeHandler = (e) => {
    setMsg(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="chat-sec-container">
      <nav className="chat-sec-nav">
        <div
          className="chat-sec-nav-icon"
          onClick={() => {
            setShowProfile(true);
          }}
        >
          {iconName(individualData.name)}
        </div>
        <p
          className="chat-sec-nav-name"
          onClick={() => {
            setShowProfile(true);
          }}
        >
          {individualData.name}
        </p>
      </nav>
      <main className="msg-container">
        {/* ------------------------------------- */}
        <div className="chat-container">
          <div className="chat-date">Today</div>

          <div className="message-container left">
            <div className="message-box">
              <p className="msg-content">
                {individualData.messages[0].message}
              </p>
              <span className="message-time">
                {individualData.messages[0].time}
              </span>
            </div>
          </div>

          <div className="message-container right">
            <div className="message-box sender">
              <p className="msg-content">
                {individualData.messages[1].message}
              </p>
              <span className="message-time">
                {individualData.messages[1].time}
              </span>
            </div>
          </div>

          {msgSend?.map((data, index) => {
            return (
              <div key={index} className="message-container right">
                <div className="message-box sender">
                  <p className="msg-content">{data.message}</p>
                  <span className="message-time">{data.time}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* ------------------------------------------- */}
        <form className="msg-container-input" onSubmit={submitHandler}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            onChange={changeHandler}
            value={msg}
          />
          <button className="msg-send-btn" type="submit">
            <IoSend className="msg-send-btn-icon" />
          </button>
        </form>
      </main>
    </div>
  );
};

export default ChatSection;
