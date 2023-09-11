import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import axios from 'axios';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe'; 

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/add-recipe" element={<AddRecipe />} />
  <Route path="/recipes/:id" element={<RecipeDetails />} />
  <Route path="/recipes/:id/edit" element={<EditRecipe />} />
</Routes>
      </div>
    </Router>
  );
};

export default App;
