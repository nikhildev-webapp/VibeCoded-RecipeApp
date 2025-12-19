import React from 'react'

export default function SearchBar({ query, onQueryChange }){
  return (
    <div className="searchbar">
      <label htmlFor="search" className="visually-hidden">Search recipes</label>
      <input
        id="search"
        className="search-input"
        placeholder="Search recipes, tags or ingredients..."
        value={query}
        onChange={(e)=> onQueryChange(e.target.value)}
        aria-label="Search recipes"
      />
    </div>
  )
}
