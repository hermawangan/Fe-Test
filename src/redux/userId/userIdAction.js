import { USER_ID } from "./userIdType";

export const userId = (id = 0) => {
  return {
    type: USER_ID,
    payload: id,
  };
};
