import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Post from './Components/Post';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
      <Form />
      <Nav />
      <Post />
    </div>
  );
}

export default App;
