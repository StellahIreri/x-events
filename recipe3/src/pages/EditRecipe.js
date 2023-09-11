import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import '/home/stela/recipe3/src/App.css';

const EditRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instructions: [],

  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  const handleEditRecipe = () => {
    axios.put(`http://localhost:4000/recipes/${id}`, {
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    
    })
      .then((response) => {
        navigate(`/recipes/${id}`);
      })
      .catch((error) => {
        console.error('Error updating recipe:', error);
      });
  };

  const handleInputChange = (e) => {
    // Update the corresponding state field based on the input's name attribute
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-recipe">
      <h2>Edit Recipe</h2>
      <label>Name:</label>
      <input type="text" name="name" value={recipe.title} onChange={handleInputChange} className="edit-recipe-input" />

     <label>Ingredients:</label>
      <input type="text" name="ingredients" value={recipe.ingredients.join(', ')} onChange={handleInputChange} className="edit-recipe-input" />

      <label>Instructions:</label>
      <input type="text" name="instructions" value={recipe.instructions.join('\n')} onChange={handleInputChange} className="edit-recipe-input" />

      <button onClick={handleEditRecipe}>Save</button>
      <Link to={`/recipes/${id}`} className="cancel-btn">Cancel</Link>
    </div>
  );
};

export default EditRecipe;