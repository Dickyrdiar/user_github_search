/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container as ChakraContainer, Text } from "@chakra-ui/react";
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
    setSelectedUser,
    repositories,
    searchUsers,

  } = useGithubAPi()

  const handleSearch = () => {
    searchUsers()
  }

  console.log("user", users, repositories);
  

  return (
    <StyledCotainer> 
      <Container>
        <Title>GitHub repositories explorer</Title>
        <InputContainer>
          <SearchInput
            type="text"
            value={username}
            placeholder="search username"
            onChange={(e: any) => setUsername(e.target.value)}
            onClick={handleSearch}
          />
        </InputContainer>
      </Container>

      <ContainerCard>
          <Card>
            {users.map((user) => (
              <AccordionComponent title={user} children={'accordion'} val={user}/>
            ))}
          </Card>
        </ContainerCard>
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
  margin-top: 200px;
`

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  margin-top: -20px;
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh; 
  margin-top: -30%;
`

const InputContainer = styled(Box)`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 30px;
`
const ContainerCard = styled(Box)`
  margin-top: -24%;
`