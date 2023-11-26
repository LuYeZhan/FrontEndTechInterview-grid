import React, { useEffect, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Wrapper, Title, ProductWrapper, DropdownWrapper, ListWrapper, ErrorMessage } from './Wrapper';
import { MemoizedInnerList } from '../../components/InnerList/InnerList';
import { mockedAlignmentOptions } from './alignmentOptions';

const Row = ({ row, products, index, updateAlignment, alignmentOptions }) => {
  const [alignment, setAlignment] = useState(row.aestheticTemplate);
  const [isDropDisabled, setDropDisabled] = useState(false);
  const [isRowFull, setIsRowFull] = useState(false);
  let templates;
  // get the templates for api, otherwise use mocks
  if (!alignmentOptions) {
    templates = mockedAlignmentOptions;
  } else templates = alignmentOptions

  const handleAlignmentChange = (event) => {
    const newAlignment = event.target.value;
    setAlignment(newAlignment);
    updateAlignment(row.id, newAlignment);
  };

  useEffect(() => {
    if (row.productIds.length >= 3) {
      setDropDisabled(true);
      setIsRowFull(true)
    } else {
      setDropDisabled(false);
      setIsRowFull(false)
    }
  }, [row.productIds]);
  return (
    <Draggable draggableId={row.id} index={index}>
      {(provided) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ListWrapper isRowFull={isRowFull}>
            <Title>{row.name}</Title>
            {isRowFull && <ErrorMessage>A row can't have more than 3 products</ErrorMessage>}
            <DropdownWrapper value={alignment} onChange={handleAlignmentChange}>
              {templates.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </DropdownWrapper>
          </ListWrapper>
          <Droppable droppableId={row.id} direction="horizontal" isDropDisabled={isDropDisabled}>
            {(provided, snapshot) => (
              <ProductWrapper
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                rowAligment={alignment}
              >
                <MemoizedInnerList key={products.id} products={products} row={row} itemType="product" />
                {provided.placeholder}
              </ProductWrapper>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Row;
