import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTimeContext } from "../Context/TimeContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Doar from "./Doar";

const Lab = () => {
  const { handleLogout, seconds, minutes, timer } = useTimeContext();

  return (
    <Wrapper>
      <div className="container">
        <h1>Timer</h1>
        <div>
          {minutes < 10 ? "0" + minutes : minutes}:{" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
        <button onClick={handleLogout}> Logout </button>
        {/* <Link to="/" onClick={handleLogout}>
          {" "}
          Logout
        </Link> */}
      </div>
    </Wrapper>
  );
};

export default Lab;

const Wrapper = styled.div`
  .container {
    position: absolute;
    top: 15%;
    left: 50%;
    width: 30%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    text-align: center;
    background-image: linear-gradient(white, lightblue);
    z-index: -10;
  }
`;
