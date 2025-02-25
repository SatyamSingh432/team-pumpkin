/* eslint-disable react/prop-types */
import "../styles/ChatBar.css";
const ChatBar = ({
  chatName,
  chatTime,
  chatMsg,
  fullData,
  setIndividualData,
}) => {
  const iconName = (data) => {
    let arr = data.split(" ");
    let newArr = new Array(2);
    for (let ele of arr) {
      newArr.push(ele[0]);
    }
    return newArr.join("");
  };
  return (
    <div
      className="chatbar-container"
      onClick={() => {
        setIndividualData(fullData);
      }}
    >
      <div className="chatbar-icon">{iconName(chatName)}</div>
      <div className="chatbar-info">
        <div className="chatbar-name-time">
          <p className="chatbar-name">{chatName}</p>
          <p className="chatbar-time">{chatTime}</p>
        </div>
        <div className="chatbar-msg"> {chatMsg}</div>
      </div>
    </div>
  );
};

export default ChatBar;
