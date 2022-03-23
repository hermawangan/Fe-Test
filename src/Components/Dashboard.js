import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";
import Post from "./Post";
import UserDetail from "./UserDetail";
import "./css/dashboard.css";
import { FaArrowLeft } from "react-icons/fa";

function Dashboard(props) {
  const [user, setUser] = useState([]);
  const [click, setClick] = useState(false);
  const [onMouseOver, setOnMouseOver] = useState(false);

  useEffect(() => {
    fetchUser();
    const currentUser = props.userData.users.filter((user) => {
      return user.id === props.id;
    });
    setUser(currentUser);
  }, []);

  const clickHandler = () => {
    setClick(!click);
  };

  const hoverHandler = () => {
    setOnMouseOver(!onMouseOver);
  };

  const outHoverHandler = () => {
    setOnMouseOver(!onMouseOver);
  };

  return (
    <div className="dashboard-container">
      <div className="nav-container">
        <p className="title-logo">Cinta Coding</p>
        <h3 className="post">Post</h3>

        {user.map((user) => (
          <h2
            className="user-dashboard"
            key={user.id}
            onClick={clickHandler}
            onMouseOver={hoverHandler}
            onMouseLeave={outHoverHandler}
          >
            Welcome, <span className="user">{user.name}</span>
          </h2>
        ))}
      </div>
      {onMouseOver ? (
        <div className="detail-profile-container">
          <div className="arrow-up"></div>
          <p className="detail-profile">Detail Profile</p>
        </div>
      ) : null}

      <div>
        {click ? (
          <>
            <span onClick={clickHandler} className="prev-icon">
              <FaArrowLeft />
            </span>

            <UserDetail />
          </>
        ) : (
          <Post />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    id: state.id.id,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Dashboard);
