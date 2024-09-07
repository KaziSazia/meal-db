import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setData(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.meals);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search for meals by name"
          className="search-bar"
        />
        <button type="submit" className="search-button">
          Search
        </button>{" "}
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
      <div className="category-grid">
        {data.slice(0, 12).map((category) => (
          <div key={category.idCategory} className="category-card">
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
