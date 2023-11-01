import recipes from "../data/recipes";
import React, { useState } from "react";
import Collapsible from './Collapsible';

function RecipeList({ ingredients }) {
    const [markedRecipes, setMarkedRecipes] = useState({}); // State to track marked recipes
    const [hideMarked, setHideMarked] = useState(false);

    // Separate the recipes into categories
    const curries = recipes.filter(recipe => recipe.category === "Curries");
    const salads = recipes.filter(recipe => recipe.category === "Salads");
    const desserts = recipes.filter(recipe => recipe.category === "Desserts");


    const canMakeRecipe = (recipe) => {
        for (let [ingredient, requiredAmount] of Object.entries(recipe.ingredients)) {
            if (!ingredients[ingredient] || ingredients[ingredient] < requiredAmount) {
                return false;
            }
        }
        return true;
    };


    const ingredientColor = (ingredient, requiredAmount) => {
        return ingredients[ingredient] && ingredients[ingredient] >= requiredAmount ? 'green' : 'red';
    };


    function toggleMarkRecipe(recipeName) {
        setMarkedRecipes(prevState => ({
            ...prevState,
            [recipeName]: !prevState[recipeName]
        }));
    }

    const getSumOfIngredients = (recipe) => {
        return Object.values(recipe.ingredients).reduce((acc, amount) => acc + amount, 0);
    };


    // Helper function to render recipes
    const renderRecipes = (recipesArray) => {
        return recipesArray
            .filter(recipe => !(hideMarked && markedRecipes[recipe.name]))
            .map(recipe => (
                <div key={recipe.name}>
                    <h3
                        key={recipe.name}
                        className={canMakeRecipe(recipe) ? "recipe-can-make" : "recipe-cannot-make"}
                        style={{ margin: '10px 0px 0px' }}
                    >
                        {recipe.name} ({getSumOfIngredients(recipe)})
                        <input
                            type="checkbox"
                            checked={markedRecipes[recipe.name] || false}
                            onChange={() => toggleMarkRecipe(recipe.name)}
                        />
                        {/* <input
                        type="checkbox"
                        checked={recipe.isMarked}
                        onChange={() => toggleMarkRecipe(recipe.name)}
                    /> */}
                    </h3>
                    {Object.entries(recipe.ingredients).map(([ingredient, requiredAmount]) => (
                        <div
                            key={ingredient}
                            style={{
                                color: ingredientColor(ingredient, requiredAmount),
                                marginLeft: '20px', // Indenting the ingredient text
                                fontSize: '0.9em'   // Making the font slightly smaller
                            }}>
                            {ingredient}: {requiredAmount}
                        </div>

                    ))}
                </div>
            ));
    };


    return (

        <div className="recipe-list">
            <h1>Dishes</h1>

            <button onClick={() => setHideMarked(prev => !prev)}>
                {hideMarked ? "Show Marked Recipes" : "Hide Marked Recipes"}
            </button>

            <Collapsible title="Curries">
                {renderRecipes(curries)}
            </Collapsible>

            <Collapsible title="Salads">
                {renderRecipes(salads)}
            </Collapsible>

            <Collapsible title="Desserts">
                {renderRecipes(desserts)}
            </Collapsible>
        </div>
    );
}

export default RecipeList;