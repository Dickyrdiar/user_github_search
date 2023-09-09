/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container as ChakraContainer, Text, CSSReset } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
// import Accordion from "../../components/Acoordion";
import AccordionComponent from "../../components/Acoordion";
import Card from "../../components/Card";
import SearchInput from "../../components/inputSearch";
import { useGithubAPi } from "../../customHooks/github_search";
import WaveBackground from '../../assets/getWaves.svg'

const DashboardSearch = () => {
  const {
    username,
    setUsername,
    users,
    searchUsers,

  } = useGithubAPi()

  const handleSearch = () => {
    searchUsers()
  }  

  return (
    <>
      <CSSReset />
      <BackgroundWaves>
        <StyledCotainer>
          <Container>
            <Title>GitHub repositories explorer</Title>
            <InputContainer>
              <SearchInput
                type="text"
                value={username}
                placeholder="search username"
                onChange={(e: any) => setUsername(e.target.value)}
                onClick={handleSearch} />
            </InputContainer>
          </Container>

          <ContainerCard>
            <Card>
              {users.map((user) => (
                <AccordionComponent title={user} children={'accordion'} val={user} />
              ))}
            </Card>
          </ContainerCard>
        </StyledCotainer>
      </BackgroundWaves>
      
    </>
  )
}

export default DashboardSearch

const BackgroundWaves = styled(Box)`
  background-image: url(${WaveBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh; /* Set the container to full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const StyledCotainer = styled(ChakraContainer)`
  background-color: #ffff;
  border-radius: 30px;
  padding: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0.5rem
  }
  margin-top: 150px;
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
  margin-left: 10px;
`