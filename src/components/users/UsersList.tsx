import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import { FC } from "react";
import { UserRow } from "./UserRow";
interface Props {
  users: {
    id: number;
    username: string;
    password: string;
    email: string;
  }[];
}
export const UsersList: FC<Props> = ({ users }) => {
  return (
    <>
      {users.length === 0 ? (
        <Heading
          as="h2"
          size="xl"
          noOfLines={1}
          marginTop={"40px"}
          marginBottom={"40px"}
          color={"blue.700"}
          textAlign={"center"}
          bgColor={"#efb810"}
          padding={"10px"}
          borderRadius={"8px"}
        >
          No hay usuarios registrados
        </Heading>
      ) : (
        <TableContainer>
          <Table variant="striped" bg={"gray.900"} borderRadius={"2xl"}>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Nombre del Usuario</Th>
                <Th>Email</Th>
                <Th>Editar</Th>
                <Th>Eliminar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <UserRow user={user} key={user.id} />
              ))}
            </Tbody>
            <Tfoot>
              <Tr h={"20px"}></Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
