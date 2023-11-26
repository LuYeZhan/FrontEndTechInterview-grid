import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Draggable } from 'react-beautiful-dnd';
import Product from './Product'; 

jest.mock('react-beautiful-dnd', () => ({
  Draggable: jest.fn(({ children }) => children({ innerRef: jest.fn(), draggableProps: {}, dragHandleProps: {} })),
}));

describe('Product Component', () => {
  const product = {
    id: 'product-1',
    name: 'Test Product',
    price: 25.99,
    imageUrl: 'https://example.com/image.jpg',
  };

  it('renders Draggable component', () => {
    render(<Product product={product} index={0} />);

    expect(Draggable).toHaveBeenCalledWith(
      expect.objectContaining({ draggableId: 'product-1', index: 0 }),
      {}
    );
  });
});
