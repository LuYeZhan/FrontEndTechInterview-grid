import React from 'react';
import Product from '../Product/Product';
import Row from '../../container/Row/Row';

const InnerList = ({ products, row, itemType, index, productMap, updateAlignment }) => {
  // Determine if the items in the list are products or rows
  const isProduct = itemType === 'product';
  // Extract unique product IDs from the row, ensuring they are unique
  const uniqueProductIds = Array.isArray(row.productIds) ? [...new Set(row.productIds)] : [];
  // Map the unique product IDs to the corresponding products
  const rowProducts = uniqueProductIds.map((productID) => productMap?.[productID]);
  return (
    <>
      {isProduct ? (
        products.map((product, idx) => (
          <Product 
          key={product.id} 
          product={product} 
          index={idx} 
          rowAligment={row.aestheticTemplate} 
          row={row}
          />
        ))
      ) : (
        <Row 
        row={row} 
        products={rowProducts} 
        index={index} 
        updateAlignment={updateAlignment} 
        />
      )}
    </>
  );
};

// Memoize the InnerList component to optimize rendering
export const MemoizedInnerList = React.memo(InnerList);
