import React, { Component } from 'react';
import CardModel from './components/CardModel';
import images from './components/images';
import './App.css';

class App extends Component {
  render() {
    const data = [
      {"title": "Boat", "price": 300, "image": images[0]},
      {"title": "Senheiser", "price": 500, "image": images[1]},
      {"title": "Realme", "price": 600, "image": images[2]}
    ];
    return (
      <div className="App">
        <div className="row">
        {data.map((item,index)=> {
           return <CardModel key={index} title={item.title} price = {item.price} image = {item.image} />;
        })}

        </div>
      </div>
    );
  }
}

export default App;


