import React, { useState, useEffect } from "react";

function MealDetails() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealDetails;
