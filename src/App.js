import { useEffect } from "react";
import AOS from "aos";
import { Route, Switch } from "react-router-dom";
import "aos/dist/aos.css";

// Component
import MainPage from "./Page/MainPage";
import AboutPage from './Page/AboutPage'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
