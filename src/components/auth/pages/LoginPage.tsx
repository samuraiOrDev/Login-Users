import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { TypeUserLogin } from "..";

const initialLoginForm = {
  username: "",
  password: "",
};
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispach: React.Dispatch<any>;
}
export const LoginPage: FC<Props> = ({ dispach }) => {
  const { onClose } = useDisclosure();
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const [errorLoginPassword, setErrorLoginPassword] = useState(false);
  const [errorLoginUsername, setErrorLoginUsername] = useState(false);
  const { username, password } = loginForm;
  const handleLogin = (userLogin: TypeUserLogin) => {
    const { username, password } = userLogin;
    if (username === "admin" && password === "12345") {
      const user = { username };
      dispach({
        type: "login",
        payload: user,
      });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );
    } else {
      alert("El usuario no presenta credenciales!!");
    }
  };
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
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Heading as="h2" size="3xl" noOfLines={1} marginBottom={"40px"}>
              Login Page
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl marginBottom={"20px"} isInvalid={errorLoginUsername}>
                <FormLabel>Nombre de usuario</FormLabel>
                <Input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={loginForm.username}
                  onChange={onInputChange}
                />
                {errorLoginUsername && (
                  <FormErrorMessage>
                    El usuerio no puede estar vacío
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl marginBottom={"20px"} isInvalid={errorLoginPassword}>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={loginForm.password}
                  onChange={onInputChange}
                />
                {errorLoginPassword && (
                  <FormErrorMessage>
                    El password no puede estar vacío
                  </FormErrorMessage>
                )}
              </FormControl>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Button marginTop={"20px"} type="submit" colorScheme="teal">
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
