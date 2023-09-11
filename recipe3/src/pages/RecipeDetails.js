import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import '/home/stela/recipe3/src/App.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/recipes/${id}`)
      .then(() => {
        navigate('/recipes');
      })
      .catch((error) => {
        console.error('Error deleting recipe:', error);
      });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <ol>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} />}
      <div className="edit-delete-buttons">

      <button className="edit-btn" onClick={() => navigate(`/recipes/${id}/edit`)}>Edit Recipe</button>
      <button className="delete-btn" onClick={handleDelete}>Delete Recipe</button>
      </div>

    </div>
  );
};

export default RecipeDetails;