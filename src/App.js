import React from 'react';
import Home from './page/Home'; // 👈 import your Home component
import "./App.css";
function App() {
  return (
    <div>
      <Home /> {/* 👈 this makes Home the first thing displayed */}
    </div>
  );
}

export default App;