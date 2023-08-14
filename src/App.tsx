import { Box, Button, Container, useColorMode } from "@chakra-ui/react";
import { UsersList } from "./components";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { ModalForm } from "./components/ModalForm";

function App() {
  const { users, showModal, setShowModal } = useContext(AuthContext);
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
}

export default App;
