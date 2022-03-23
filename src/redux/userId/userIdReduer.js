import { USER_ID } from "./userIdType";

const initialState = {
  id: 0,
};

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ID:
      return {
        id: action.payload,
      };

    default:
      return state;
  }
};

export default idReducer;
