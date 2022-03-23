import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaComment } from "react-icons/fa";

import "./css/getComment.css";

function GetComment({ id }) {
  const [comment, setComment] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const data = response.data;
        setComment(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div>
      {click ? (
        <div>
          <p onClick={clickHandler} className="comment-title">
            All Comment
          </p>
          <>
            <ul className="comment-ul">
              {comment.map((comment) => {
                return (
                  <li key={comment.id} className="comment-list">
                    {comment.body}
                  </li>
                );
              })}
            </ul>
          </>
        </div>
      ) : (
        <div className="container-comment">
          <span onClick={clickHandler} className="icon">
            <FaComment />
          </span>
          <span className="number-comments">{comment.length}</span>
        </div>
      )}
    </div>
  );
}

export default GetComment;
