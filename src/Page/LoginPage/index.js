import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";

// Component
import Navbar from "../../Component/Navbar";
import Login from "../../Component/Login";
import Footer from "../../Component/Footer";

function LoginPage(props) {
  return (
    <>
      <div className="dotted d-o log"></div>
      <Container>
        <Navbar />
        <Login message={props.message} getToken={props.getToken}/>
      </Container>
      <Footer />
    </>
  );
}

export default LoginPage;
