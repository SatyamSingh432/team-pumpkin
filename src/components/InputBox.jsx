/* eslint-disable react/prop-types */
import "../styles/InputBox.css";
const InputBox = ({ placeholder, type }) => {
  return (
    <input
      className="input-box-welcome-page"
      type={type}
      placeholder={placeholder}
      required
    />
  );
};

export default InputBox;
