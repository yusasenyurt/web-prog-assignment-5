import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>React Product Dashboard</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={toggleProducts}>
          {showProducts ? 'Hide Products' : 'Show Products'}
        </button>
      </div>

      {name && <p className="welcome-message">Hello, {name}!</p>}

      {showProducts && <ProductList />}
    </div>
  );
}