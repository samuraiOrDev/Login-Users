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
import useLoginPage from "../../../hooks/useLoginPage";

export const LoginPage = () => {
  const { onClose } = useDisclosure();
  const {
    loginForm,
    errorLoginPassword,
    errorLoginUsername,
    onInputChange,
    handleSubmit,
  } = useLoginPage();
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
