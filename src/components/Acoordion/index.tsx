import React, { useState } from 'react';
import { ChevronDownIcon, StarIcon } from '@chakra-ui/icons';
import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spinner,
  Text
} from '@chakra-ui/react';
import styled from "styled-components";
import { useGithubAPi } from '../../customHooks/github_search';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  val: any
}

const Accordion: React.FC<AccordionProps> = ({ title, children, val }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {setSelectedUser, repositories, loading} = useGithubAPi()

  const toggleAccordion = (val: any) => {
    console.log(val)
    setIsOpen(!isOpen);
    setSelectedUser(val)
  };

  console.log("repo", repositories)

  return (
    <ChakraAccordion>
      <StyledAccordionItem>
        <AccordionButton onClick={() => toggleAccordion(val)}>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <ChevronDownIcon transform={isOpen ? 'rotate(180deg)' : ''} />
        </AccordionButton>
        <AccordionPanel>{isOpen && (
          <DisplayContent>
            <Box>
              {repositories.map((value) => (
                <>
                  <CardAccordion key={value.id}>
                    {loading && <LoadingSpinner size={'xs'} />}
                    <>
                      <Box>
                        <RepoDescription>{value.name}</RepoDescription>
                        <Description>{value.description}</Description>
                      </Box>

                      <DisplayStart>
                        <Box>
                          {value.stargazers_count}
                        </Box>
                        <Box>
                          <StarIcon boxSize={4} color={'yellow.500'} />
                        </Box>
                      </DisplayStart>
                    </>
                  
                  </CardAccordion>
                </>
              ))}
            </Box>
          </DisplayContent>
        )}</AccordionPanel>
      </StyledAccordionItem>
    </ChakraAccordion>
  );
};

export default Accordion;

const StyledAccordionItem = styled(AccordionItem)`
  background-color: white;
  border: 1px solid #ddd;
  margin: 0.5rem 0;
  border-radius: 4px;
`;

const DisplayContent = styled(Box)`
  display: flex;
  justify-content: space-between;
`

const RepoDescription = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const Description = styled(Text)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
`

const CardAccordion = styled(Box)`
  background-color: #ffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const DisplayStart = styled(Flex)`
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
`
const LoadingSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #0099ff;
`;
