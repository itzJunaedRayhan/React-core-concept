import React, { useEffect } from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const actor = ['Ragner','Bjorn','Ubbe','Ivar','Hvitserk'];
  const Products = [
    {name : 'Photoshop', price : '$90.99'},
    {name : 'Illustrator', price : '$60.99'},
    {name : 'PDF Reader', price : '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am Learning React</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            actor.map(nayok => <li>{nayok}</li>)
          }
          {
            Products.map(Product => <li>{Product.price}</li>)
          }
        </ul>
        {
          Products.map(product => <Product Product={product}></Product>)
        }
        <Person name={actor[0]} job='Football'></Person>
        <Person name={actor[1]} job='King'></Person>
      </header>
    </div>
  );
}



//  creating Component and Pass Object
function Product(props){
  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    color : 'red',
    height : '200px',
    width : '400px',
    float : 'left' 
  }
  const {name, price} = props.Product;
  return(
    <div style={productStyle}>
      <h3>Name  : {name}</h3>
      <h5>Price : {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
//useEffect
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}



//  Creating Component for useState
function Counter(){
  const [count, setCount] = useState(10);
  const handleInrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleInrease}>Increase</button>
    </div>
  )
}




//  Creating Component and pass properties
function Person(props){
  return(<div style={{border: '2px solid gold', width : '400px', margin : '15px'}}>
    <h3>My Name : {props.name}</h3>
    <p>My Proffesion: {props.job}</p>
  </div>)
}
export default App;
