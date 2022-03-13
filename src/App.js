import React, { useState, useEffect } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import {getHomeList, getMovieInfo} from './Tmdb';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]= useState(null);

  useEffect(()=>{
    const loadAll = async () =>{
      let list = await getHomeList()
      setMovieList(list);

      let originals = list.filter(e => e.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll()
  }, [])


  return (
    <div className="App">
      <Header />

      {featuredData && <FeaturedMovie item={featuredData}/>}

    </div>
  );
}

export default App;
