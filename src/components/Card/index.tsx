import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

interface CardComponentProps {
  children: React.ReactNode
}

const Card: React.FC<CardComponentProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;

const StyledCard = styled(Box)`
  display: flex;
  width: 540px;
  padding: 24px;
  flex-direction: column;
  /* align-items: center; */
  background-color: #ffffff; /* Add your background color */
  border: 1px solid #e0e0e0; /* Add your border styling */
  border-radius: 8px; /* Add your border radius */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add your box shadow */
`;