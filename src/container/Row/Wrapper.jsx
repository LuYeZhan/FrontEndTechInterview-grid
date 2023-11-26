import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1em 13em;
  border: 1.5px solid black;
  border-radius: 3px;
  background-color: lightgrey;
  position: relative; 
  min-height: 20em;
  `;

export const Title = styled.h3`
  padding: 1em 0;
  display: flex
  align-items: center;
  margin: 0;
  margin-left: 5em;
`;



export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.isRowFull ? '#FFD2D2' : 'inherit')};
`

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.rowAligment};  
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'black' : 'inherit')};
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
`;

export const DropdownWrapper = styled.select`
  font-size: 1em;
  cursor: pointer;
  height: 2em;
  margin: 1em 1em 0 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  padding: 0.25em;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: none;
    border-color: #4d90fe;
    box-shadow: 0 0 5px rgba(77, 144, 254, 0.5);
  }
`;