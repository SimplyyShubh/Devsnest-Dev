// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
 

  return (
    <div className="App" >
        
        <div className="container">
            <Card title="Pizza" calories    ="120"/>
            <Card title="Burger" calories   ="100"/>
            <Card title="Brownies" calories ="80"/>
            <Card title="Lasagna" calories  ="150"/>
            <Card title="Calzone" calories  ="87"/>
            <Card title="Muffins" calories  ="46"/>
            <Card title="Pasta" calories    ="100"/>
            <Card title="Chocolate" calories="35"/>
        </div>
    </div>);
  
};

export default App;
