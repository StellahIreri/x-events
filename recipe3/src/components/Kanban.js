import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kanban = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/recipes/'); 
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="kanban">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image_url} alt={recipe.name} />
          <h3>{recipe.name}</h3>
          {/* <p>{recipe.description}</p>
          <p>Start Time: {recipe.start_time}</p>
          <p>End Time: {recipe.end_time}</p>
          <p>Location: {recipe.location}</p>
          <p>Organizer: {recipe.organizer}</p> */}
          <button>View</button>
        </div>
      ))}
    </div>
  );
};

export default Kanban;
