import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAIL,
} from "./postType";
import axios from "axios";

const fetchPostReq = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
};

const fetchPostFail = (error) => {
  return {
    type: FETCH_POST_FAIL,
    payload: error,
  };
};

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchPostReq);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const post = response.data;
        dispatch(fetchPostSuccess(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFail(errorMsg));
      });
  };
};
