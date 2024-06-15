import styled from 'styled-components';
import { FaForward } from 'react-icons/fa';

const Button = styled.button`
  background-color: #007bff; 
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; 
  }
`;

const NextButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FaForward />
  </Button>
);

export default NextButton;
