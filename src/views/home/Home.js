import Rules from "../../components/home/rules/Rules";
import Welcome from "../../components/home/welcome/Welcome";
import HorizontalRule from "../../components/ui/horizontal-rule/HorizontalRule";

const Home = () => {
  return (
    <>
      <Welcome />
      <HorizontalRule />
      <Rules />
      <HorizontalRule />
    </>
  );
};

export default Home;
