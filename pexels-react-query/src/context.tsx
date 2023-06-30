import { createContext, useContext, useEffect, useState } from "react";
import { ContextProps } from "./interfaces/ContextProps";

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<undefined | ContextProps>(undefined);

const getInitialDarkMode = () => {
  const actualThemeValueMode = window.matchMedia(
    "prefers-color-scheme:dark"
  ).matches;
  const actualThemeMode = localStorage.getItem("darkMode") === "true";
  return actualThemeMode || actualThemeValueMode;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw Error("useAppContext must be within AppProvide");
  }
  return context;
};

const existTermPage = (): { searchTerm: string; pageNumber: number } => {
  const getSearchPage = localStorage.getItem("searchPage");
  return getSearchPage ? JSON.parse(getSearchPage) : "";
};

export const AppProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState(() => {
    const data = existTermPage();
    if (!data.searchTerm) {
      return "bear";
    }
    return data.searchTerm;
  });
  const [pageNumber, setPageNumber] = useState(() => {
    const data = existTermPage();
    if (!data.pageNumber) {
      return 1;
    }
    return data.pageNumber;
  });

  const toggleDarkMode = () => {
    const darkTheme = !isDarkMode;
    setIsDarkMode(darkTheme);
    localStorage.setItem("darkMode", JSON.stringify(darkTheme));
  };

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem(
      "searchPage",
      JSON.stringify({ searchTerm, pageNumber })
    );
  }, [searchTerm, pageNumber]);

  return (
    <AppContext.Provider
      value={{
        toggleDarkMode,
        isDarkMode,
        searchTerm,
        setSearchTerm,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
