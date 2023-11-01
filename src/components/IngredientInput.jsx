function IngredientInput({ ingredients, setIngredients }) {

    const ingredientNames = [
        'Large Leek', 
        'Tasty Mushroom', 
        'Fancy Egg', 
        'Soft Potato',
        'Fancy Apple',
        'Fiery Herb',
        'Bean Sausage',
        'Moomoo Milk',
        'Honey',
        'Pure Oil',
        'Warming Ginger',
        'Snoozy Tomato',
        'Soothing Cacao',
        'Slowpoke Tail',
        'Greengrass Soybeans'
    ];

    const handleInputChange = (ingredient, value) => {
      setIngredients(prev => ({
        ...prev,
        [ingredient]: value
      }));
    };
  
    return (
      <div className="ingredient-input">
        <h1>Ingredients</h1>
        {ingredientNames.map(name => (
        <label key={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}:
          <input 
            type="number" 
            value={ingredients[name] || ''} 
            onChange={e => handleInputChange(name, e.target.value)} 
          />
        </label>
      ))}
      </div>
    );
  }

  export default IngredientInput;
  