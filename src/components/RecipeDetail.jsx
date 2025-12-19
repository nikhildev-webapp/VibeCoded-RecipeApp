import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import recipes from '../data/recipes'

export default function RecipeDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = recipes.find(r => r.id === id)

  if(!recipe) return (<p className="container">Recipe not found.</p>)

  return (
    <main className="container recipe-detail">
      <button className="btn btn-link" onClick={()=> navigate(-1)}>← Back</button>
      <div className="detail-grid">
        <img src={recipe.image} alt={recipe.title} loading="lazy" />
        <div>
          <h1>{recipe.title}</h1>
          <p className="muted">{recipe.description}</p>
          <div className="meta">
            <span className="pill">{recipe.time}</span>
            <span className="pill">{recipe.difficulty}</span>
          </div>

          <h3>Ingredients</h3>
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>

          <h3>Method</h3>
          <ol>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
