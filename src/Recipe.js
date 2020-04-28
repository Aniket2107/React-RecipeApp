import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
      <p>Calorie: {Math.round(calories)}</p>
      <img src={image} className={style.image} alt="recipe" />
    </div>
  );
};

export default Recipe;
