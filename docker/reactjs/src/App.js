import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListBook from './components/listBook';
import CreateBook from './components/createBook';
import ViewBook from './components/viewBook';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListBook/>}></Route>
            <Route path="/books" element={<ListBook/>}></Route>
            <Route path="/add-book/:id" element={<CreateBook/>}></Route>
            <Route path="/view-book/:id" element={<ViewBook/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;