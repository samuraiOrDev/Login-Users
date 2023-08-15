import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

export const UserForm = () => {
  const {
    userForm,
    errorPassword,
    errorEmail,
    errorUsername,
    handleSubmit,
    onInputChange,
    setShowModal,
  } = useContext(UsersContext);
  return (
    <>
      <Box>
        <Heading as="h2" size="3xl" noOfLines={1} marginBottom={"40px"}>
          Crear Usuario
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl marginBottom={"20px"} isInvalid={errorUsername}>
            <FormLabel>Nombre de usuario</FormLabel>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              onChange={onInputChange}
              value={userForm.username}
            />
            {errorUsername && (
              <FormErrorMessage>
                El nombre de usuario es requerido
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl marginBottom={"20px"} isInvalid={errorPassword}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={onInputChange}
              value={userForm.password}
            />
            {errorPassword && (
              <FormErrorMessage>La contrase es requerida</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errorEmail}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onInputChange}
              value={userForm.email}
            />
            {errorEmail && (
              <FormErrorMessage>El email no puede estar vacío</FormErrorMessage>
            )}
          </FormControl>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button marginTop={"20px"} type="submit" colorScheme="teal">
              Crear
            </Button>
            <Button
              marginTop={"20px"}
              colorScheme="red"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};
