import Product from './Product';

const products = [
  { id: 1, title: 'Wireless Mouse', price: 25.99 },
  { id: 2, title: 'Mechanical Keyboard', price: 89.50 },
  { id: 3, title: 'HD Monitor', price: 199.99 },
  { id: 4, title: 'USB-C Hub', price: 34.00 }
];

export default function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}