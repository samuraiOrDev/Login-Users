import { Container, Box, Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AlertSucess, ModalForm, UsersList } from "../components";
import { UsersContext } from "../context/UsersContext";

export const UsersPage = () => {
  const {
    users,
    showModal,
    setShowModal,
    showAlertUserForm,
    setShowAlertUserForm,
    setShowAlertEditForm,
    showAlertEditForm,
  } = useContext(UsersContext);
  useEffect(() => {
    if (showAlertUserForm) setTimeout(() => setShowAlertUserForm(false), 3000);
    if (showAlertEditForm) setTimeout(() => setShowAlertEditForm(false), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAlertUserForm, showAlertEditForm]);
  return (
    <>
      {showAlertUserForm && (
        <AlertSucess
          title={"Usuario Creado!!"}
          description={"El usuario se ha creado de forma correcta"}
          status="success"
        />
      )}
      {showAlertEditForm && (
        <AlertSucess
          title={"Usuario Actualizado!"}
          description={"El usuario se ha actualizado de forma correcta"}
          status="success"
        />
      )}
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
    </>
  );
};
