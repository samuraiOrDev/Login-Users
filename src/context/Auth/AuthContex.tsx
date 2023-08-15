import { createContext } from "react";
import { TypeUserLogin } from "../../components";

export interface TypeAuthContext {
  login:
    | {
        isAuth: boolean;
        user:
          | {
              username: string;
            }
          | undefined;
      }
    | {
        isAuth: boolean;
        user?: undefined;
      }
    | undefined;
  handleLogOut: () => void;
  handleLogin: (userLogin: TypeUserLogin) => void;
}
export const AuthContext = createContext({} as TypeAuthContext);
