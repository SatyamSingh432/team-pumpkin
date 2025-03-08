// import { useNavigate } from "react-router-dom";
import { useState } from "react";

import InputBox from "../components/InputBox";
import Button from "../components/Butoon";

import logo from "../assets/image66.png";
import logo2 from "../assets/DottedShape.png";

import { useregister } from "../utils/apis";
import "../styles/WelcomePage.css";

const WelcomePage = () => {
  const inputFields = [
    { placeholder: "Enter Name", type: "text", name: "username" },
    { placeholder: "Email", type: "email", name: "email" },
    { placeholder: "Phone Number", type: "number", name: "number" },
    {
      placeholder: "Password",
      type: "password",
      name: "password",
    },
    {
      placeholder: "Confirm-Password",
      type: "password",
      name: "confirmpassword",
    },
  ];
  const [formData, setFormData] = useState({
    username: "satyam vaaa",
    email: "satyamrajput7239@gmail.com",
    number: "1233",
    password: "cxcx",
    confirmpassword: "cxcx",
  });
  const [isLogin, setIsLogin] = useState(false);

  // const navigate = useNavigate();
  const changeHandler = (evt) => {
    setFormData((prvData) => ({
      ...prvData,
      [evt.target.name]: evt.target.value,
    }));
  };
  const submitHandler = async (evt) => {
    evt.preventDefault();
    // navigate("/chatpage");
    if (!isLogin) {
      console.log(
        formData.username,
        formData.email,
        formData.number,
        formData.password
      );
      try {
        const res = await useregister(
          formData.username,
          formData.email,
          formData.number,
          formData.password
        );
        if (res.message) {
          alert(res.message);
          return;
        }
        alert("Registration Successful");
        console.log(res);
      } catch (error) {
        alert("An error occurred while registering.");
        console.error("Registration Error", error);
      }

      console.log(formData);
    } else {
      console.log(formData);
    }
    setFormData({
      username: "",
      email: "",
      number: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <main className="welcome-page-container">
      <form className="login-register-container" onSubmit={submitHandler}>
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
        {!isLogin ? (
          <div className="welcome-page-input-container">
            {inputFields.map((data, index) => {
              return (
                <InputBox
                  key={index}
                  placeholder={data.placeholder}
                  type={data.type}
                  onChange={changeHandler}
                  name={data.name}
                  value={formData[data.name]}
                />
              );
            })}
          </div>
        ) : (
          <div className="welcome-page-input-container">
            {inputFields
              .filter((data) => {
                return (
                  data.placeholder === "Enter Name" ||
                  data.placeholder === "Password"
                );
              })
              .map((data, index) => {
                return (
                  <InputBox
                    key={index}
                    placeholder={data.placeholder}
                    type={data.type}
                    onChange={changeHandler}
                    name={data.name}
                    value={formData[data.name]}
                  />
                );
              })}
          </div>
        )}

        <Button buttonText={!isLogin ? "SIGN UP" : "LOG IN"} type="submit" />
        <p className="toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {!isLogin ? "Login" : "Register"}
          </span>
        </p>
      </form>
    </main>
  );
};

export default WelcomePage;
