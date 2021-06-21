import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import { Route, Switch, Redirect } from "react-router-dom";
import "aos/dist/aos.css";

// Component
import MainPage from "./Page/MainPage";
import ProductPage from "./Page/ProductPage";
import AboutPage from "./Page/AboutPage";
import TeamPage from "./Page/TeamPage";
import ContactPage from "./Page/ContactPage";
import AdminPage from "./Page/AdminPage";
import ArticlePage from "./Page/ArticlePage";
import InboxPage from "./Page/InboxPage";
import GalleryPage from "./Page/GalleryPage";
import LoginPage from "./Page/LoginPage";
import AdminProductPage from "./Page/AdminProductPage";
import SlidersPage from "./Page/SlidersPage";

import ProtectedRoute from "./Component/ProtectedRoute";
import { AuthContext } from "./Helpers/AuthContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/product" exact>
            <ProductPage />
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
          <Route path="/artikel">
            {isAuth ? <ArticlePage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/inbox">
            {isAuth ? <InboxPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/products">
            {isAuth ? <AdminProductPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/sliders">
            {isAuth ? <SlidersPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/login">
            {isAuth ? (
              <Redirect to="/admin" />
            ) : (
              <LoginPage message="Silahkan Login Terlebih Dahulu" />
            )}
          </Route>
          <ProtectedRoute
            isAuth={isAuth}
            path="/admin"
            component={AdminPage}
            exact
          />
        </Switch>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
