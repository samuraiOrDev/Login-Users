export interface TypeUserLogin {
  username: string;
  password: string;
}

export type TypeState =
  | { isAuth: boolean; user: { username: string } }
  | {
      isAuth: boolean;
      user?: undefined;
    }
  | undefined;

export type TypePayload =
  | { payload: { username: string }; type: string }
  | { payload?: undefined; type: string };
