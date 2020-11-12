import styles from "./Home.module.scss";

import Rules from "../../components/home/rules/Rules";
import Settings from "../../components/home/settings/Settings";
import Welcome from "../../components/home/welcome/Welcome";
import HorizontalRule from "../../components/horizontal-rule/HorizontalRule";

const Home = () => {
  return (
    <>
      <Welcome />
      <HorizontalRule />
      <Rules />
      <HorizontalRule />
      <Settings />
      <HorizontalRule />
    </>
  );
};

export default Home;
