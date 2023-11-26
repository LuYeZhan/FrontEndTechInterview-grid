import api from "./api";

const getProductIdsFromURL = () => {
  const searchParams = window.location.search;
  const productIdsParam = searchParams.get('ids');
  if (productIdsParam) {
    try {
      // Parse the product IDs from the query parameter
      const parsedIds = JSON.parse(productIdsParam);
      // Ensure parsedIds is an array
      if (Array.isArray(parsedIds)) {
        return parsedIds;
      } else {
        console.error('Invalid product IDs format:', parsedIds);
      }
    } catch (error) {
      console.error('Error parsing product IDs:', error);
    }
  }

  return [];
};

export const handleAddNewRowLogic = (prevState) => {
  const newRowId = `new-row-${prevState.rowOrder.length + 1}`;
  const newEmptyRow = {
    id: newRowId,
    name: `New Row ${prevState.rowOrder.length + 1}`,
    productIds: [],
    aestheticTemplate: 'none',
  };

  return {
    ...prevState,
    rowOrder: [newRowId, ...prevState.rowOrder],
    rows: {
      ...prevState.rows,
      [newRowId]: newEmptyRow,
    },
  };
};

export const fetchProductsAndTemplatesLogic = async (state) => {
  try {
    const productIdsFromURL = getProductIdsFromURL();
    const products = await api.getProducts(productIdsFromURL);
    const templates = await api.getTemplates();
    return {
      ...state,
      products: {
        ...state.products,
        ...products,
      },
      templates,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return state;
  }
};

export const updateAlignmentLogic = (prevState, rowId, newAlignment) => {
  const updatedRows = {
    ...prevState.rows,
    [rowId]: {
      ...prevState.rows[rowId],
      aestheticTemplate: newAlignment,
    },
  };

  return {
    ...prevState,
    rows: updatedRows,
  };
};

export const filterAndModifyState = (state) => {
  // Filter rows based on the condition (id inside productIds array and aesthetic template not none)
  const filteredRows = Object.values(state.rows)
    .filter(row => (
      row.productIds.length > 0 &&
      row.productIds.every(productId => state.products[productId]) && // Check if all productIds are valid
      row.aestheticTemplate !== ' '
    ));

  const filteredState = {
    ...state,
    rowOrder: state.rowOrder.filter(rowId => filteredRows.some(row => row.id === rowId)),
    rows: filteredRows.reduce((acc, row) => {
      acc[row.id] = row;
      return acc;
    }, {}),
  };

  return filteredState;
};