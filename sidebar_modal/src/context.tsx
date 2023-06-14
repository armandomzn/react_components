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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => {
      return !prev;
    });
  };

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => {
      return !prev;
    });
  };

  return (
    <AppContext.Provider
      value={{ isModalOpen, isSideBarOpen, toggleModal, toggleSideBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
