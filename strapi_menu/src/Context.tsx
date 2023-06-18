import { createContext, useContext, useState } from "react";
import { ContextProps } from "./interfaces/ContextProps";

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<undefined | ContextProps>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be within AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [pageId, setPageId] = useState<null | string>(null);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => {
      return !prev;
    });
  };

  return (
    <AppContext.Provider
      value={{ isSideBarOpen, toggleSideBar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
