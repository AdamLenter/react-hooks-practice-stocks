import React from "react";

function SearchBar({ sortBy, changeSortBy, filterBy, changeFilterBy }) {
  
  function handleSort(e) {
    changeSortBy(e.target.value);
  }

  function processFilter(e) {
    changeFilterBy(e.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically" ? true : false }
          onChange={(e)=>handleSort(e)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price" ? true : false }
          onChange={(e)=>handleSort(e)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value = {filterBy} onChange={(e)=>processFilter(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
