import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe, isFavorite, onToggleFavorite }){
  return (
    <article className="card" aria-labelledby={`title-${recipe.id}`}>
      <img className="card-img" src={recipe.image} alt={recipe.title} loading="lazy" />
      <div className="card-body">
        <h3 id={`title-${recipe.id}`}>{recipe.title}</h3>
        <p className="muted">{recipe.description}</p>
        <div className="meta">
          <span className="pill">{recipe.time}</span>
          <span className="pill">{recipe.difficulty}</span>
        </div>
        <div className="card-actions">
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View</Link>
          <button
            className={`btn btn-ghost ${isFavorite ? 'active' : ''}`}
            onClick={()=> onToggleFavorite(recipe.id)}
            aria-pressed={isFavorite}
            aria-label={`${isFavorite ? 'Remove' : 'Add'} ${recipe.title} to favorites`}
          >{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
        </div>
      </div>
    </article>
  )
}
