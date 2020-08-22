import React from 'react';
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
const products = ['iPhone 11','MacBook Pro', 'iPad', 'Apple Magic Mouse']

function Product(props){
  return(
    <div>
    <h1>Product List :</h1>
    <ul>
    <li>{props.product}</li>
    </ul>
    <h2>Cart</h2>
    <button>Add to cart</button>
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
