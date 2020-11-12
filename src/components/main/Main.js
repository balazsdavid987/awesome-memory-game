import { Switch, Route } from "react-router-dom";

import styles from "./Main.module.scss";

import Home from "../../views/home/Home";
import Play from "../../views/play/Play";

const Main = () => {
  return (
    <main className={styles.component}>
      <Switch>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
