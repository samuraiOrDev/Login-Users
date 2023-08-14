import { TypePayload } from "./UsersRedurcer";

export interface TypeUsersContext {
  userForm: {
    username: string;
    password: string;
    email: string;
  };
  errorEmail: boolean;
  errorPassword: boolean;
  errorUsername: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  users: {
    id: number;
    username: string;
    password: string;
    email: string;
  }[];
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
  dispatch: React.Dispatch<{
    type: string;
    payload: TypePayload;
  }>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
