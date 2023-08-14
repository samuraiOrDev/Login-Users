import { FC, useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User, usersReducer } from "./AuthRedurcer";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};
const initialUsers: User[] = [
  {
    id: 1,
    username: "John Doe",
    password: "aerosmith1234",
    email: "vmordiales@gmail.com",
  },
  {
    id: 2,
    username: "Reina",
    password: "ab12",
    email: "reinaOrdiales@gmail.com",
  },
];
interface Props {
  children: React.ReactNode;
}
export const AuthProvider: FC<Props> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [IdUser, setIduser] = useState(users.length + 1);
  const [userForm, setUserForm] = useState(initialUserForm);
  const [errorUsername, setErrorUsernama] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const { username, password, email } = userForm;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const validateSchema = () => {
    let result = true;
    if (username.length < 1) {
      setErrorUsernama(true);
      result = false;
    }
    if (email.length < 1) {
      setErrorEmail(true);
      result = false;
    }
    if (password.length < 1) {
      setErrorPassword(true);
      result = false;
    }
    return result;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateSchema()) {
      setIduser((state: number) => state + 1);
      const newUser = { ...userForm, id: IdUser };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      dispatch({
        type: "addUser",
        payload: newUser,
      });
      setShowModal(false);
      setUserForm(initialUserForm);
      setErrorEmail(false);
      setErrorPassword(false);
      setErrorUsernama(false);
    }
  };
  const handleDelete = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch({
      type: "deleteUser",
      payload: id,
    });
  };
  const handleUpdate = (id: number) => {
    console.log(id);
  };
  return (
    <AuthContext.Provider
      value={{
        userForm,
        errorPassword,
        errorEmail,
        errorUsername,
        handleSubmit,
        onInputChange,
        users,
        handleDelete,
        handleUpdate,
        dispatch,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
