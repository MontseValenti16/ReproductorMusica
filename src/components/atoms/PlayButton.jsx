import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Button = styled.button`
  background-color: #28a745; 
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838; 
  }
`;

const PlayButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FaPlay />
  </Button>
);

export default PlayButton;
