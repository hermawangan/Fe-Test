import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAIL,
} from "./postType";

const initialState = {
  loading: false,
  posts: [],
  errorMsg: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case FETCH_POST_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
