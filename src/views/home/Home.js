import styles from "./Home.module.scss";

import Rules from "../../components/home/rules/Rules";
import Settings from "../../components/home/settings/Settings";
import Welcome from "../../components/home/welcome/Welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <hr />
      <Rules />
      <hr />
      <Settings />
      <hr />
    </>
  );
};

export default Home;
