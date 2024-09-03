import './App.css';
import RecipeList from './components/recipeList';
import ViewRecipes from './components/viewRecipe';
import React, { useState } from 'react';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App bg-orange-200 min-h-screen p-4 font-mono">
      <header className="text-center mb-8">
        <h1 className='text-6xl font-bold text-purple-600 animate-pulse'>
          Recipes 101
        </h1>
        <p className='text-2xl text-blue-500 mt-2'>Your source for ad free, straightforward recipes at a glance!</p>
        </header>
        <main className='flex flex-col md:flex-row gap-8'>
          <RecipeList setSelectedRecipe={setSelectedRecipe}/>
          <ViewRecipes selectedRecipe={selectedRecipe}/>
        </main>
      <footer className="text-center mt-8 text-sm text-gray-600">
        <marquee>
          Welcome to my recipe site on the World Wide Web!  🌎💻🌮🍝🍴 Find all sorts of recipes inspired and original or submit your own!
        </marquee>
      </footer>
    </div>
  );
}

export default App;
