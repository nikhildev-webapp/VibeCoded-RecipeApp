import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes, favorites, onToggleFavorite }){
  if(!recipes.length) return (<p className="empty">No recipes found.</p>)

  return (
    <section className="grid">
      {recipes.map(r => (
        <RecipeCard key={r.id} recipe={r} isFavorite={favorites.includes(r.id)} onToggleFavorite={onToggleFavorite} />
      ))}
    </section>
  )
}
