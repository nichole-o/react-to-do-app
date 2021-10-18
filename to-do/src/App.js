import React from 'react';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <div>
        <ToDo></ToDo>
      </div>
    </div>
  );
}

export default App;
