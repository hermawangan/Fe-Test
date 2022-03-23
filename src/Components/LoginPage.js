import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";
import LoginForm from "./LoginForm";
import "./css/loginPage.css";

function LoginPage({ userData, fetchUser }) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div>
      {click ? (
        <>
          <LoginForm userData={userData} />
        </>
      ) : (
        <div className="container">
          <div className="login-container">
            <p className="login-logo">Cinta Coding</p>
            <button onClick={clickHandler} className="login-button">
              Login
            </button>
          </div>
          <div className="login-image-container">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.beDX_PH7IKECkOLHeRhu3AHaEK%26pid%3DApi&f=1"
              alt="workplace"
              className="login-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToState)(LoginPage);
