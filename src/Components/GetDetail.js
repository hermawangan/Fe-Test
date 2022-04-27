import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import "./css/getDetails.css";

function GetDetail({ id, clickForParents }) {
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setComments(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id]);

  const clickHandler = () => {
    setClick(!click);
    clickForParents(!click);
  };

  return (
    <div>
      {click ? (
        loading ? (
          <h2>Loading, please wait</h2>
        ) : (
          <div key={comments.id}>
            <span onClick={clickHandler} className="arrow-icon">
              <FaArrowLeft />
            </span>
            <p className="comments-body">{comments.body}</p>
          </div>
        )
      ) : (
        <span onClick={clickHandler} className="details">
          Details
        </span>
      )}
    </div>
  );
}

export default GetDetail;
