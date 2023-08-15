import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
interface Props {
  user: {
    id: number;
    username: string;
    password: string;
    email: string;
  };
}
export const EditForm: FC<Props> = ({ user }) => {
  const { id } = user;
  const [userFormEdit, setUserFormEdit] = useState({
    usernameEdit: user.username,
    emailEdit: user.email,
  });
  const [errorUsernameEdit, setErrorUsernameEdit] = useState(false);
  const [errorEmailEdit, setErrorEmailEdit] = useState(false);
  const { usernameEdit, emailEdit } = userFormEdit;
  const { users, dispatch, setShowAlertEditForm } = useContext(UsersContext);
  const validateSchema = () => {
    let result = true;
    if (usernameEdit.length < 1) {
      setErrorUsernameEdit(true);
      result = false;
    }
    if (emailEdit.length < 1) {
      setErrorEmailEdit(true);
      result = false;
    }
    return result;
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFormEdit({
      ...userFormEdit,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log({ userFormEdit });
    e.preventDefault();
    if (validateSchema()) {
      const newUsers = users.map((user) => {
        if (user.id === id) {
          console.log("Entramos en el filter!!!");
          user.email = userFormEdit.emailEdit;
          user.username = userFormEdit.usernameEdit;
          return user;
        } else {
          return user;
        }
      });
      dispatch({
        type: "updateUser",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        payload: newUsers,
      });
      setShowAlertEditForm(true);
    }
  };
  return (
    <Box>
      <Heading as="h2" size="xl" noOfLines={1} marginBottom={"40px"}>
        Editar Usuario: {id}
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl marginBottom={"20px"} isInvalid={errorUsernameEdit}>
          <FormLabel>Nombre de usuario</FormLabel>
          <Input
            type="text"
            placeholder="Username"
            name="usernameEdit"
            onChange={onInputChange}
            value={userFormEdit.usernameEdit}
          />
          {errorUsernameEdit && (
            <FormErrorMessage>
              El nombre de usuario es requerido
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errorEmailEdit}>
          <FormLabel>Correo electrónico</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            name="emailEdit"
            onChange={onInputChange}
            value={userFormEdit.emailEdit}
          />
          {errorEmailEdit && (
            <FormErrorMessage>El email no puede estar vacío</FormErrorMessage>
          )}
        </FormControl>
        <Button marginTop={"20px"} type="submit" colorScheme="teal">
          Guardar
        </Button>
      </form>
    </Box>
  );
};
