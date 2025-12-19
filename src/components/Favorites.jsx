import React from 'react'
import RecipeList from './RecipeList'

export default function Favorites({ recipes, favorites, onToggleFavorite }){
  const favRecipes = recipes.filter(r => favorites.includes(r.id))
  return (
    <main className="container">
      <h1>Your Favorites</h1>
      <RecipeList recipes={favRecipes} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </main>
  )
}
