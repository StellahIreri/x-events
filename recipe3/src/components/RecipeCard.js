import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


const RecipeCard = ({ recipe }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved((prevStatus) => !prevStatus);
};
return (
    <div className="recipe-card">
      <img src={recipeImage} alt="Oscars" />

      <h2>{recipe.name}</h2>
      <p className="recipe-ingredients">{recipe.ingredients}</p>

      
      <Link to={`/recipes/${recipe.id}`} className="view-details-btn">View Details</Link>
      {/* <button
        className={isSaved ? 'save-btn save-btn-active' : 'save-btn'}
        onClick={handleSaveClick}
      >
        {isSaved ? 'Saved' : 'Save'}
      </button> */}
    </div>
  );
};

export default RecipeCard;