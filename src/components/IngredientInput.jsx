import React from "react";
// import ingredientList from "../data/ingredients.json";
import largeleek from '../assets/ingredient_images/largeleek.png';
import tastymushroom from '../assets/ingredient_images/tastymushroom.png';
import fancyegg from '../assets/ingredient_images/fancyegg.png';
import softpotato from '../assets/ingredient_images/softpotato.png';
import fancyapple from '../assets/ingredient_images/fancyapple.png';
import fieryherb from '../assets/ingredient_images/fieryherb.png';
import beansausage from '../assets/ingredient_images/beansausage.png';
import moomoomilk from '../assets/ingredient_images/moomoomilk.png';
import honey from '../assets/ingredient_images/honey.png';
import pureoil from '../assets/ingredient_images/pureoil.png';
import warmingginger from '../assets/ingredient_images/warmingginger.png';
import snoozytomato from '../assets/ingredient_images/snoozytomato.png';
import soothingcacao from '../assets/ingredient_images/soothingcacao.png';
import slowpoketail from '../assets/ingredient_images/slowpoketail.png';
import greengrasssoybeans from '../assets/ingredient_images/greengrasssoybeans.png';

function IngredientInput({ ingredients, setIngredients }) {

    const ingredientList = [
        { name: 'Large Leek', image: largeleek },
        { name: 'Tasty Mushroom', image: tastymushroom },
        { name: 'Fancy Egg', image: fancyegg },
        { name: 'Soft Potato', image: softpotato },
        { name: 'Fancy Apple', image: fancyapple },
        { name: 'Fiery Herb', image: fieryherb },
        { name: 'Bean Sausage', image: beansausage },
        { name: 'Moomoo Milk', image: moomoomilk },
        { name: 'Honey', image: honey },
        { name: 'Pure Oil', image: pureoil },
        { name: 'Warming Ginger', image: warmingginger },
        { name: 'Snoozy Tomato', image: snoozytomato },
        { name: 'Soothing Cacao', image: soothingcacao },
        { name: 'Slowpoke Tail', image: slowpoketail },
        { name: 'Greengrass Soybeans', image: greengrasssoybeans }
    ];


    const handleInputChange = (ingredient, value) => {
        setIngredients(prev => ({
            ...prev,
            [ingredient]: value
        }));
    };

    return (
        <div className="ingredient-list-container">
            <h1>Ingredients</h1>
            {ingredientList.map(item => (
                <div key={item.name} className="ingredient-row">
                    <img src={item.image} alt={item.name} className="ingredient-image" />
                    <span className="ingredient-name">{item.name}</span>
                    <input
                        className="ingredient-amount-input"
                        type="number"
                        value={ingredients[item.name] || ''}
                        onChange={e => handleInputChange(item.name, e.target.value)}
                        max="999"
                    />
                </div>
            ))}
        </div>
    );
}

export default IngredientInput;
