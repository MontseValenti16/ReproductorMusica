import styled from 'styled-components';
import { FaBackward } from 'react-icons/fa';

const Button = styled.button`
  background-color: #ffc107; 
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800; 
  }
`;

const PreviousButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FaBackward />
  </Button>
);

export default PreviousButton;
