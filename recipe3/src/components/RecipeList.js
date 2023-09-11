import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeItem from './RecipeDetails';

const RecipeList = () => {
  const [recipes , setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the backend API
    axios.get('http://localhost:4000/recipes')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Recipes List</h2>
      {recipes.map((event) => (
        <RecipeItem key={event.id} event={event} />
      ))}
    </div>
  );
};
export default RecipeList;
