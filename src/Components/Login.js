import React, { useRef, useEffect, useState } from "react";
import Lab from "./Lab";
import styled from "styled-components";
import { useTimeContext } from "../Context/TimeContext";
import Doar from "./Doar";
import { useDoarContext } from "../Context/DoarContext";

const Login = () => {
  const { seconds, minutes, timer, startTimer } = useTimeContext();
  const { openDoar, closeDoar, isdoarOpen, flag, changeFlag } =
    useDoarContext();

  const password = useRef();
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (password.current.value == "Test@123") {
      localStorage.setItem("passwordData", "Test@123");
    } else {
      alert("Access denied due to wrong password");
    }
    // startTimer();
    changeFlag();
    openDoar();
  };

  const minute = localStorage.getItem("minute");
  const second = localStorage.getItem("second");

  const newUser = () => {
    localStorage.clear();
  };

  return (
    <Wrapper>
      <div
        className={`${flag ? "login-container disappear" : "login-container"}`}
      >
        {getPassword ? (
          <div className={`${isdoarOpen ? "form" : ""}`}>
            {" "}
            <h1 className={`${flag ? "display" : ""}`}> Loading...</h1>
          </div>
        ) : (
          <form>
            <div>
              <label> Enter your pilearning password</label>
              <input type="password" ref={password} />
            </div>
            <div>
              <button type="button" onClick={handleSubmit}>
                Enter Lab
              </button>
            </div>
            <div>
              {" "}
              {second && minute ? (
                <>
                  {second === 0 && minute === 0 ? (
                    <div> Your Time is over </div>
                  ) : (
                    <div>
                      Your remaining time is:{" "}
                      {minute < 10 ? "0" + minute : minute}:{" "}
                      {second < 10 ? "0" + second : second}
                    </div>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
            <button onClick={newUser}> New USer</button>
          </form>
        )}
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0000cd;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 5px solid white;
    overflow: hidden;
    z-index: 3;
  }
  input {
    width: 250px;
    height: 30px;
    margin-top: 10px;
  }
  button {
    padding: 5px 15px;
    margin: 10px;
  }
  .disappear {
    background-color: transparent !important;
    border: none;
  }
  .form {
    animation: rotation 2s linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .display {
    display: none;
  }
`;
