import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="section-center">
        {isLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
