import React, { useContext, useEffect, useReducer, useState } from "react";

const DoarContext = React.createContext();

export const DoarProvider = ({ children }) => {
  const [isdoarOpen, setIsdoarOpen] = useState(false);
  const [flag, setFlag] = useState(false);

  const changeFlag = () => {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  };

  const openDoar = () => {
    setIsdoarOpen(true);
  };
  const closeDoar = () => {
    setIsdoarOpen(false);
  };

  return (
    <DoarContext.Provider
      value={{
        openDoar,
        closeDoar,
        isdoarOpen,
        changeFlag,
        flag,
        setFlag,
      }}
    >
      {children}
    </DoarContext.Provider>
  );
};

export const useDoarContext = () => {
  return useContext(DoarContext);
};
