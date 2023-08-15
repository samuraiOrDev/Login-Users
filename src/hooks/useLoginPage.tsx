import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth/AuthContex";

const initialLoginForm = {
  username: "",
  password: "",
};

const useLoginPage = () => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const [errorLoginPassword, setErrorLoginPassword] = useState(false);
  const [errorLoginUsername, setErrorLoginUsername] = useState(false);
  const { username, password } = loginForm;

  const { handleLogin } = useContext(AuthContext);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  const validateSchema = () => {
    let result = true;
    if (username.length < 1) {
      setErrorLoginUsername(true);
      result = false;
    }
    if (password.length < 1) {
      setErrorLoginPassword(true);
      result = false;
    }
    return result;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateSchema()) {
      handleLogin({ username, password });
      setErrorLoginPassword(false);
      setErrorLoginUsername(false);
      setLoginForm(initialLoginForm);
    }
  };
  return {
    loginForm,
    errorLoginPassword,
    errorLoginUsername,
    onInputChange,
    handleSubmit,
  };
};

export default useLoginPage;
