import React, { useState } from "react";
import { connect } from "react-redux";
import { userId } from "../redux";
import Dashboard from "./Dashboard";
import "./css/loginForm.css";

function LoginForm({ userData, id, userId }) {
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handlerForm = (e) => {
    e.preventDefault();
    setUser(() => {
      return {
        username: "",
        password: "",
      };
    });

    userData.users.map((userVal) => {
      if (
        userVal.username === user.username &&
        userVal.username === user.password
      ) {
        userId(userVal.id);
        setSuccess(true);
      }
    });
  };

  const controlFormUsername = (e) => {
    setUser(() => {
      return {
        ...user,
        username: e.target.value,
      };
    });
  };

  const controlFormPassword = (e) => {
    setUser(() => {
      return {
        ...user,
        password: e.target.value,
      };
    });
  };

  return (
    <>
      {success ? (
        <Dashboard />
      ) : (
        <div className="form-container">
          <form onSubmit={handlerForm} className="form">
            <h2 className="form-title">Login Page</h2>
            <div className="input-container">
              <input
                id="username"
                className="input"
                type="text"
                placeholder="username"
                value={user.username}
                onChange={controlFormUsername}
              />
              <input
                id="password"
                className="input"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={controlFormPassword}
              />
              <button className="input button">Login </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.id.id,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    userId: (id) => dispatch(userId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(LoginForm);
