import { HiBars3BottomLeft } from "react-icons/hi2";
import { useAppContext } from "../context";
const Home = () => {
  const { toggleModal, toggleSideBar } = useAppContext();
  return (
    <main>
      <button className="toggle-btn" onClick={toggleSideBar}>
        <HiBars3BottomLeft />
      </button>
      <button className="btn modal-btn" onClick={toggleModal}>
        open modal
      </button>
    </main>
  );
};

export default Home;
