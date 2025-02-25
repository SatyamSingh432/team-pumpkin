import InputBox from "../components/InputBox";
import Button from "../components/Butoon";

import logo from "../assets/image66.png";
import logo2 from "../assets/DottedShape.png";

import "../styles/WelcomePage.css";

const WelcomePage = () => {
  const inputFields = [
    { placeholder: "Enter Name", type: "text" },
    { placeholder: "Email", type: "email" },
    { placeholder: "Phone Number", type: "number" },
  ];
  return (
    <main className="welcome-page-container">
      <form className="login-register-container">
        {[...Array(2)].map((_, index) => {
          return (
            <div key={index} className={`welcome-decoration${index + 1}`}>
              <img className="image-logo" src={logo2} alt="logo" />
            </div>
          );
        })}
        <div className="welcome-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="welcome-page-input-container">
          {inputFields.map((data, index) => {
            return (
              <InputBox
                key={index}
                placeholder={data.placeholder}
                type={data.type}
              />
            );
          })}
        </div>
        <Button buttonText="Singn Up" />
      </form>
    </main>
  );
};

export default WelcomePage;
