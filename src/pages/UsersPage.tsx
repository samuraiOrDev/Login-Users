import { useColorMode, Container, Box, Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ModalForm, UsersList } from "../components";
import { UsersContext } from "../context/UsersContext";

export const UsersPage = () => {
  const { users, showModal, setShowModal } = useContext(UsersContext);
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    colorMode === "light" && toggleColorMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      maxWidth="container.xl"
    >
      {showModal ? (
        <Box width={"100%"} marginTop={"40px"}>
          <ModalForm />
          <UsersList users={users} />
        </Box>
      ) : (
        <Box width={"100%"}>
          <Button
            marginTop={"20px"}
            marginBottom={"20px"}
            colorScheme="teal"
            onClick={() => setShowModal(true)}
          >
            Nuevo Usuario
          </Button>
          <UsersList users={users} />
        </Box>
      )}
    </Container>
  );
};
