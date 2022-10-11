import { useQuery } from "react-query";
import axios from "axios"
import { User } from "../interfaces/User"
import { Card } from "./Card";
import styled from 'styled-components';
import { FaDatabase } from 'react-icons/fa'

export const Users: React.FC = () => {

  const getUsers = async () => await axios.get("http://localhost:3001/users").then(res => res.data);

  const { data: users, isLoading, isError, refetch } = useQuery(['users'], getUsers);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oops something went wrong!</div>
  }

  return (
    <>
      <ButtonStyled onClick={() => refetch()}><FaDatabase/> Refresh Database</ButtonStyled>
      <UsersContainer>
        {users.map((user: User, key: number) => <Card user={user} key={key}/>)}
      </UsersContainer>
    </>
  );
}

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonStyled = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`