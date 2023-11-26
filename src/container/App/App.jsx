import React, { useState, useEffect } from 'react';
import initialData from '../../mocks/initialData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Wrapper, LogoWrapper } from './Wrapper';
import { MemoizedInnerList } from '../../components/InnerList/InnerList';
import NavBar from '../../components/NavBar/NavBar';
import {handleAddNewRowLogic, fetchProductsAndTemplatesLogic, updateAlignmentLogic, filterAndModifyState} from './utils'
import api from './api';

const App = () => {
  const [state, setState] = useState(initialData);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.1, 2)); // Limit zoom to 2x
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 0.5)); // Limit zoom to 0.5x
  };

  const onDragEnd = result => {

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === 'row') {
      const newRowOrder = Array.from(state.rowOrder);
      newRowOrder.splice(source.index, 1);
  
      if (destination.index !== undefined) {
        newRowOrder.splice(destination.index, 0, draggableId);
      } else {
        // If destination.index is undefined, it means it's dropped outside a valid droppable
        newRowOrder.push(draggableId);
      }
  
      const newState = {
        ...state,
        rowOrder: newRowOrder,
      };
      setState(newState);
    }
  
    const start = state.rows[source.droppableId];
    const finish = state.rows[destination.droppableId];

    if (start === finish) {
      const destinationRow = state.rows[destination.droppableId];
  
      if (!start || !destinationRow) {
        // Handle invalid source or destination
        return;
      }
    
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      const newProductIDs = [...start.productIds];
      newProductIDs.splice(source.index, 1);
  
      if (destinationRow.productIds) {
        newProductIDs.splice(destination.index, 0, draggableId);
      } else {
        // Handle case where destinationRow.productIds is undefined or not an array
      }
    
      const newRow = {
        ...start,
        productIds: newProductIDs,
      };
  
      const newState = {
        ...state,
        rows: {
          ...state.rows,
          [newRow.id]: newRow,
        },
      };      
      setState(newState);
    }
    
    // moving from one list to anhoter
    const startProductIds = Array.from(start.productIds)
    startProductIds.splice(source.index, 1)
    const newStart = {
      ...start,
      productIds: startProductIds
    }

    const finishProductIds = Array.from(finish.productIds);
    finishProductIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      productIds: finishProductIds
    }

    const newState = {
      ...state,
      rows: {
        ...state.rows,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    setState(newState)
  };

  

  const handleAddNewRow = () => {
    setState((prevState) => handleAddNewRowLogic(prevState));
  };


  const updateAlignment = (rowId, newAlignment) => {
    setState((prevState) => updateAlignmentLogic(prevState, rowId, newAlignment));
  };

  const fetchProductsAndTemplates = async () => {
    const updatedState = await fetchProductsAndTemplatesLogic(state);
    setState(updatedState);
  };

  const saveState = async () => {
    try {
      const filteredState = filterAndModifyState(state);
      await api.saveState(filteredState);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    fetchProductsAndTemplates();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
        <NavBar 
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleAddNewRow={handleAddNewRow}
        saveState={saveState}
        />
        <LogoWrapper src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png' alt='a'/>
        <h3>Jeans</h3>
        <DragDropContext
        onDragEnd={onDragEnd}
        >
          <Droppable droppableId='all-rows' direction='vertical' type='row'>
            {(provided) => (
              <Wrapper
                {...provided.droppableProps}
                ref={provided.innerRef}
                transform={`scale(${zoomLevel})`}   
              >
                {state.rowOrder.map((rowId, index) => {
                  const row = state.rows[rowId];
                  return <MemoizedInnerList 
                  key={row.id} 
                  row={row} 
                  productMap={state.products} 
                  index={index} 
                  updateAlignment={updateAlignment} 
                  alignmentOptions={state.templates}/>;
                })}
                {provided.placeholder}
              </Wrapper>
            )}
          </Droppable>
        </DragDropContext>
    </>
  );
};

export default App;