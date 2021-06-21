import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Toast } from "react-bootstrap";

import { AuthContext } from "../../Helpers/AuthContext";

// Asset
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";

function Login(props) {
  const [showToast, setShowToast] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const { setIsAuth } = useContext(AuthContext);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const signInHandler = (e) => {
    e.preventDefault();
    const user = usernameRef.current.value;
    const pass = passwordRef.current.value;

    const newData = {
      username: user,
      password: pass,
    };

    axios
      .post("http://localhost:8000/user/login", newData)
      .then((res) => {
        if (res.data.code === "404" || res.data.code === "204") {
          setShowToast(true);
          setErrMessage(res.data.message);
        } else {
          localStorage.setItem("token", res.data.token);
          setIsAuth(true);

          history.replace("/admin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        className="card-toast"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Message</strong>
        </Toast.Header>
        <Toast.Body className="bg-danger">{errMessage}</Toast.Body>
      </Toast>
      <div className="login text-center">
        <h1>SIGN IN</h1>
        <h5>{props.message}</h5>
        <div className="login-form" data-aos="fade-up" data-aos-duration="900">
          <div className="login-icon">
            <PersonIcon className="icon" fontSize="large" />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <form>
                <div class="mb-4 mt-4">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    ref={usernameRef}
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="username"
                  />
                </div>
                <div class="mb-5">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="*****"
                  />
                </div>
                <button
                  onClick={signInHandler}
                  className="btn btn-primary w-100 mb-5"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
