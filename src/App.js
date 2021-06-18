import { useEffect } from "react";
import AOS from "aos";
import { Route, Switch } from "react-router-dom";
import "aos/dist/aos.css";

// Component
import MainPage from "./Page/MainPage";
import AboutPage from "./Page/AboutPage";
import TeamPage from "./Page/TeamPage";
import ContactPage from "./Page/ContactPage";
import AdminPage from "./Page/AdminPage";
import ArticlePage from "./Page/ArticlePage";
import InboxPage from "./Page/InboxPage";

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
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/admin" exact>
          <AdminPage />
        </Route>
        <Route path="/admin/artikel">
          <ArticlePage />
        </Route>
        <Route path="/admin/inbox">
          <InboxPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
