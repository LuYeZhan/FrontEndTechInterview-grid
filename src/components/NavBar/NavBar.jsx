import React from 'react';
import { Wrapper } from './Wrapper';
import { Button } from '../Button/Wrapper'

const NavBar = ({ handleZoomIn, handleZoomOut, handleAddNewRow, saveState }) => {
  return (
    <Wrapper>
      <Button onClick={handleZoomIn}>Zoom In</Button>
      <Button onClick={handleZoomOut}>Zoom Out</Button>
      <Button onClick={handleAddNewRow}>New Row</Button>
      <Button onClick={saveState}>Save</Button>
    </Wrapper>
  );
};

export default NavBar;