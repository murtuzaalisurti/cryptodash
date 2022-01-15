import React, { useState } from "react";
import ImageComponent from "../components/ImageComponent";
import LoginIll from "../assets/login-sign-up.png";
import {
  WrapperLogin,
  LoginLeft,
  RightLogin,
} from "../styledComponents/LoginStyles";
import Input from "../components/Input";
import Button from "../components/Button";
const Login = () => {
  const [showReg, setShowReg] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const handleClick = () => {
    console.log(1);
  };
  const handleChange = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <WrapperLogin>
        <LoginLeft>
          <h1>{showReg ? "Register" : "Login"}</h1>
          <form onSubmit={handleSubmit}>
            {/* show only if reg is true */}
            {showReg && (
              <Input
                type="text"
                placeholder={`What's your Name?`}
                handleChange={handleChange}
              />
            )}
            <Input
              handleChange={handleChange}
              type="email"
              placeholder={`What's your Email?`}
            />
            <Input
              handleChange={handleChange}
              type="password"
              placeholder={`What's your Password?`}
            />
          </form>
          <Button text="Submit" handleClick={handleClick} />
          <p className="or">Or</p>
          <h3 className="show-reg">
            {showReg ? "Already a member?" : "Yet to register?"}
            <button
              className="inline-button"
              onClick={() => setShowReg(!showReg)}
            >
              {showReg ? "Login" : "Register"}
            </button>
          </h3>
        </LoginLeft>
        <RightLogin>
          <ImageComponent src={LoginIll} />
        </RightLogin>
      </WrapperLogin>
    </>
  );
};

export default Login;
