import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./css/userDetails.css";

function UserDetail({ id }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const data = response.data;
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user-container">
      {loading ? (
        <p>Loading, pls wait</p>
      ) : (
        <ul className="user-ul" key={userData.id}>
          <li className="user-li">
            {" "}
            <span className="key">Username</span>{" "}
            <span className="equal">:</span>{" "}
            <span className="value">{userData.username}</span>
          </li>
          <li className="user-li">
            {" "}
            <span className="key">Email</span> <span className="equal">:</span>{" "}
            <span className="value">{userData.email}</span>{" "}
          </li>
          <li className="user-li">
            {" "}
            <span className="key">Adress</span> <span className="equal">:</span>{" "}
            <span className="value">{userData.address.city}</span>
          </li>
          <li className="user-li">
            {" "}
            <span className="key">Phone</span> <span className="equal">:</span>{" "}
            <span className="value">{userData.phone}</span>
          </li>
        </ul>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    id: state.id.id,
  };
};

export default connect(mapStateToProps)(UserDetail);
