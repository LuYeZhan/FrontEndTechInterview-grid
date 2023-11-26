// import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Wrapper, ProductImage, ProductDetails } from './Wrapper';

const Product = ({ product, index, row }) => {

  // logic to disable dragging when there's only 1 product left
  // const [isDragDisabled, setIsDragDisabled] = useState(false);
  // const [isProductDraggable, setIsProductDraggable] = useState(false);
  // useEffect(() => {
  //   if (row.productIds.length === 1) {
  //     setIsDragDisabled(true);
  //     setIsProductDraggable(true)
  //   } else {
  //     setIsDragDisabled(false);
  //     setIsProductDraggable(false)
  //   }
  // }, [row.productIds]);

  return (
    <Draggable 
    draggableId={product.id} 
    index={index} 
    // isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductDetails
            // isProductDraggable={isProductDraggable}
          >
            <div>{product.name}</div>
            <div>{product.price} €</div>
          </ProductDetails>    
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Product;
