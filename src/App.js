import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("tomato");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;

  const getRecipe = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button">search</button>
      </form>
      <div className="recipes">
        {recipe.map((recip) => (
          <Recipe
            key={Math.random() * 5}
            title={recip.recipe.label}
            calories={recip.recipe.calories}
            image={recip.recipe.image}
            ingredients={recip.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
