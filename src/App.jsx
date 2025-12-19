import './styles.css'
import React, { useEffect, useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'
import Favorites from './components/Favorites'
import recipesData from './data/recipes'

function App(){
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState(()=>{
    try { return JSON.parse(localStorage.getItem('favorites') || '[]') } catch { return [] }
  })

  useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  const onToggleFavorite = (id)=>{
    setFavorites(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])
  }

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return recipesData
    return recipesData.filter(r => (
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.join(' ').toLowerCase().includes(q)
    ))
  },[query])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={(
          <main className="container">
            <SearchBar query={query} onQueryChange={setQuery} />
            <RecipeList recipes={filtered} favorites={favorites} onToggleFavorite={onToggleFavorite} />
          </main>
        )} />

        <Route path="/favorites" element={(
          <Favorites recipes={recipesData} favorites={favorites} onToggleFavorite={onToggleFavorite} />
        )} />

        <Route path="/recipe/:id" element={<RecipeDetail />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
