import React, { useState } from 'react';

import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';

import './App.css';

function App() {
  const [ingredients, setIngredients] = useState({});

  return (
    <div className="app">
      <div className="ingredients-column">
        <IngredientInput ingredients={ingredients} setIngredients={setIngredients} />
      </div>
      <div className="recipes-column">
        <RecipeList ingredients={ingredients} />
      </div>
    </div>
  );
}

export default App;
