/* eslint-disable react/prop-types */
import "../styles/InputBox.css";
const InputBox = ({ placeholder, type, name, onChange, value }) => {
  return (
    <input
      className="input-box-welcome-page"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default InputBox;
