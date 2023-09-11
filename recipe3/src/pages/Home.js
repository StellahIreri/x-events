import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
//import '/home/stela/recipe3/src/App.css';


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/recipes')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);


  const handleRecipeDeleted = (deletedRecipeId) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== deletedRecipeId));
  };
  return (
    <div className="home-page">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleRecipeDeleted} />
          ))}
      </div>
    </div>
  );
};

export default Home;