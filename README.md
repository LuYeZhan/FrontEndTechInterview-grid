This application features drag and drop functionality, with row and product reordering.

Tech stack: React hooks, styled component, jest, react-beautiful-dnd

There are 3 endpoint calls which will return 404 as no api is connected

The endpoints are:

Get /products?ids=[id1,id2,..] which will return an array of products

Get /templates which will return an array of templates used to align the products inside the row

Post /grids which will create a new grid with all the data we have on the screen

This repository shows responsive design (only big desktop, more than 2400px), and TDD using jest(only product component)

