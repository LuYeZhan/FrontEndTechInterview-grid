const initialData = {
  products: {
    'product-1': { 
      id: 'product-1',
      name: 'product1 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-2': { 
      id: 'product-2',
      name: 'product2 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-3': { 
      id: 'product-3',
      name: 'product3 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-4': { 
      id: 'product-4',
      name: 'product4 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-5': { 
      id: 'product-5',
      name: 'product5 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-6': { 
      id: 'product-6',
      name: 'product6 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-7': { 
      id: 'product-7',
      name: 'product7 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
    'product-8': { 
      id: 'product-8',
      name: 'product8 name',
      price: 155,
      imageUrl: 'https://img.lojasrenner.com.br/item/783048755/large/13.jpg'
    },
  },
  rows: {
    'row-1': {
      id: 'row-1',
      name: 'Test row 1',
      productIds: [
        'product-1','product-2',
      ],
      aestheticTemplate: 'right'
    },
    'row-2': {
      id: 'row-2',
      name: 'Test row 2',
      productIds: [
        'product-4', 'product-5'
      ],
      aestheticTemplate: 'left'
    },
    'row-3': {
      id: 'row-3',
      name: 'Test row 3',
      productIds: [
        'product-3',
      ],
      aestheticTemplate: 'center'
    },
    'row-4': {
      id: 'row-4',
      name: 'Test row 4',
      productIds: [
        'product-6',
      ],
      aestheticTemplate: ' '
    },
    'row-5': {
      id: 'row-5',
      name: 'Test row 5',
      productIds: [
        'product-7',
        'product-8',
      ],
      aestheticTemplate: ' '
    },
  },
  // Facilitate reordering of the columns
  rowOrder: ['row-1', 'row-2', 'row-3', 'row-4', 'row-5'],
};

export default initialData;
