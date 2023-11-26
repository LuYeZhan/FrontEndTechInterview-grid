import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 0.5em 1em 1em 1em;
  background-color: ${props => props.isDragging ? 'lightgreen': 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const ProductImage = styled.img`
  height: 20vh;
  object-fit: cover;
  border-radius-top: 5px;
`;

export const ProductDetails = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 1em margin between direct children */
  > * {
    margin-bottom: 0.5em; 
  }
  background-color: ${props => props.isProductDraggable ? '#FFD2D2': 'white'};
  width: 100%;
`;
