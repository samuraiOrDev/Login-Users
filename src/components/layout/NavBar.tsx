interface Props {
  handleLogOut: () => void;
  userName: string;
}

import { FC } from "react";
import { Flex, Button, Container, Heading, Box } from "@chakra-ui/react";
import capitalizeString from "../../utils/capitalizeString";

export const NavBar: FC<Props> = ({ handleLogOut, userName = "Default" }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      background={"gray.700"}
    >
      <Container
        display={"flex"}
        alignItems={"center"}
        maxWidth="container.xl"
        justifyContent="space-between"
      >
        <Heading as="h3" size={"md"} fontWeight={"bold"} color="aqua">
          UsersApp
        </Heading>

        <Box display={"flex"} alignItems={"center"} gap={"2rem"}>
          <Heading as="h4" size="md" color={"#fff"} noOfLines={1}>
            {capitalizeString(userName)}
          </Heading>
          <Button
            size="sm"
            rounded="md"
            colorScheme="teal"
            onClick={handleLogOut}
            variant="outline"
          >
            Sair
          </Button>
        </Box>
      </Container>
    </Flex>
  );
};

export default NavBar;
