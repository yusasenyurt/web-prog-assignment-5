# Assignment 5 - Web Programming

## File Organization
- `App.jsx`: The root component managing the application state (`showProducts` and `name`). It handles conditional rendering of the product list.
- `ProductList.jsx`: Renders a static array of products and maps over them to create `Product` components.
- `Product.jsx`: A reusable component that takes `title` and `price` as props and wraps its content inside a `Card` component.
- `Card.jsx`: A composition component that uses the `children` prop to render a styled wrapper for any content passed to it.

## Challenges Faced
The main challenge was setting up the component composition properly using the `children` prop in the `Card` component and ensuring that state only lived in `App.jsx` while passing the necessary data down the tree via props. Ensuring the input field remained a controlled component without direct DOM manipulation was also a key learning point.