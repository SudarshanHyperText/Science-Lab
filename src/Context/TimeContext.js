import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useDoarContext } from "./DoarContext";

const TimeContext = React.createContext();

export const TimeProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(9);

  const { closeDoar, changeFlag, setFlag, isdoarOpen } = useDoarContext();

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const startTimer = () => {
    // const timer = setInterval(() => {
    //   setSeconds(seconds - 1);
    //   if (seconds === 0) {
    //     setMinutes(minutes - 1);
    //     setSeconds(59);
    //   }
    // }, 1000);
    // return () => clearInterval(timer);
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem("second", seconds);
    localStorage.setItem("minute", minutes);
    setFlag(false);
    closeDoar();
    clearInterval(timer);
    // clearInterval(timer);
  };
  useEffect(() => {
    setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        localStorage.clear();
        localStorage.setItem("second", seconds);
        localStorage.setItem("minute", minutes);
      }
    }, 400);
  });

  return (
    <TimeContext.Provider
      value={{ handleLogout, seconds, minutes, timer, startTimer }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTimeContext = () => {
  return useContext(TimeContext);
};
