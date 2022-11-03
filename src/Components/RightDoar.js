import React from "react";
import { useDoarContext } from "../Context/DoarContext";
import styled from "styled-components";

const RightDoar = () => {
  const { closeDoar, openDoar, isdoarOpen, flag } = useDoarContext();
  return (
    <Wrapper>
      <div className={`${flag ? "doar" : "doar show-doar"}`}></div>
    </Wrapper>
  );
};

export default RightDoar;

const Wrapper = styled.div`
  .doar {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #6495ed;
    border: 2.5px solid white;
    box-sizing: border-box;
    transition: all 2s linear;
    transform: translate(+100%);
    z-index: -1;
  }
  .show-doar {
    transform: translate(0);
    z-index: 2;
  }
`;
