import styled from 'styled-components';
import { FaPause } from 'react-icons/fa';

const Button = styled.button`
  background-color: #dc3545; 
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333; 
  }
`;

const PauseButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FaPause />
  </Button>
);

export default PauseButton;
