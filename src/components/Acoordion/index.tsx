import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import styled from 'styled-components';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChakraAccordion>
      <StyledAccordionItem>
        <AccordionButton onClick={toggleAccordion}>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <ChevronDownIcon transform={isOpen ? 'rotate(180deg)' : ''} />
        </AccordionButton>
        <AccordionPanel>{isOpen && (
          <DisplayContent>
            <Box>
              {children}
            </Box>

            <Box>
              Star icon
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

