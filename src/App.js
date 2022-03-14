import React, { useState, useEffect } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import MovieRow from './components/MovieRow/MovieRow';
import {getHomeList, getMovieInfo} from './Tmdb';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]= useState(null);
  const [darkHeader, setDarkHeader] = useState(false)

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


  useEffect(()=>{
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  console.log(movieList)

  return (
    <div className="App">
      <Header dark={darkHeader}/>

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <div className='list'>
        {movieList.map((item, key) => <MovieRow title={item.title} key={key} items={item.items}/>)}
      </div>

    </div>
  );
}

export default App;
