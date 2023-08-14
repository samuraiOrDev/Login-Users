import { TypePayload, TypeState } from "..";

export const loginReducer = (_state: TypeState, action: TypePayload) => {
  switch (action.type) {
    case "login":
      return {
        isAuth: true,
        user: action.payload,
      };
    case "logout":
      return {
        isAuth: false,
      };
    default:
      break;
  }
};
