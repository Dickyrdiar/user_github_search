/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container as ChakraContainer } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
// import Accordion from "../../components/Acoordion";
import AccordionComponent from "../../components/Acoordion";
import Card from "../../components/Card";
import SearchInput from "../../components/inputSearch";
import { useGithubAPi } from "../../customHooks/github_search";

const DashboardSearch = () => {
  const {
    username,
    setUsername,
    users,
    selectedUser,
    setSelectedUser,
    repositories,
    searchUsers,

  } = useGithubAPi()

  const handleSearch = () => {
    searchUsers()
  }

  const handleUserClick = (user: string) => {
    setSelectedUser(user)
  }

  console.log("user", users);
  

  return (
    <StyledCotainer>
      <Container>
        <InputContainer>
          <SearchInput
            type="text"
            value={username}
            placeholder="search username"
            onChange={(e: any) => setUsername(e.target.value)}
            onClick={handleSearch}
          />
        </InputContainer>
        <ContainerCard>
          <Card>
            {users.map((user) => (
              <AccordionComponent title={user} children={'accordion'}/>
            ))}
          </Card>
        </ContainerCard>
      </Container>
    </StyledCotainer>
  )
}

export default DashboardSearch

const StyledCotainer = styled(ChakraContainer)`
  background-color: #ffff;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem
  }
  width: 90wh;
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh; /* Adjust the height as needed */
`

const InputContainer = styled(Box)`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`
const ContainerCard = styled(Box)`
  margin-top: 20px;
`