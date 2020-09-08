import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';

function App() {

  const [test, setTest] = useState([])
  const getRecipes = async() => {
    console.log('test')

    let resp = await axios.get('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=da0d25335e5c47fbb45421e953c17d83')
    console.log(resp)
  }

  return (
    <div className="App">
      <button type='submit' onClick={getRecipes}>get recipes</button>
    </div>
  );
}

export default App;