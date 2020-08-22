import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Practice></Practice>
        <Product product={products[0]}></Product>
      </header>
    </div>
  );
}
const products = ['iPhone 11','MacBook Pro', 'iPad', 'Apple Magic Mouse', 'Apple Pencil'];

function Product(props){
  const [addCart, setCart] = useState(0)
  const handleIncrease = () => setCart(addCart + 1)
  return(
    <div>
    <h1>Product List - Cart {addCart} <button onClick={() => setCart(addCart - 1)} >Remove</button></h1>
    <ul>
      {
      products.map(product => <li>{product} - <button onClick={handleIncrease}>Add to cart</button></li>)
      }
      </ul>
    </div>
  )
}

function Practice(){
  return(
    <div>
      <h1>This is a practive header</h1>
      <p>Practice praragraph</p>
    </div>
  )
}

export default App;
