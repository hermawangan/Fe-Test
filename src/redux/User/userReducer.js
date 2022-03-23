import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "./userType";

const initialState = {
  loading: false,
  users: [],
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errorMessage: "",
      };

    case FETCH_USERS_FAIL:
      return {
        loading: false,
        users: [],
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
