import { useContext, createContext, useState, useEffect } from "react";
import { ContextProps } from "./interfaces/ContextInterface";

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<undefined | ContextProps>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useAppContext must be within AppProvider`);
  }
  return context;
};

export const AppProvider = ({ children }: Props) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const toggleNavBar = () => {
    setIsNavBarOpen((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <AppContext.Provider value={{ isNavBarOpen, toggleNavBar, windowSize }}>
      {children}
    </AppContext.Provider>
  );
};
