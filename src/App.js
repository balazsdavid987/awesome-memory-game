import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
};

export default App;
