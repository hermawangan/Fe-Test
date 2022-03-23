import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import idReducer from "./userId/userIdReduer";
import postReducer from "./Post/postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  id: idReducer,
  posts: postReducer,
});

export default rootReducer;
