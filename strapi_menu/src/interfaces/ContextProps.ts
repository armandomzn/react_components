export interface ContextProps {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
  pageId: string | null;
  setPageId: React.Dispatch<React.SetStateAction<string | null>>;
}
