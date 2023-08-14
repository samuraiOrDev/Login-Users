export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}
export type TypePayload = User | number | User[];

export const usersReducer = (
  state: User[],
  action: { type: string; payload: TypePayload }
) => {
  switch (action.type) {
    case "addUser":
      if (Array.isArray(action.payload)) {
        return [...state, ...action.payload];
      } else {
        return [...state, action.payload];
      }
    case "deleteUser":
      return state.filter((user) => user.id != action.payload);
    case "updateUser":
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      } else {
        return [action.payload];
      }
    default:
      return state;
  }
};
