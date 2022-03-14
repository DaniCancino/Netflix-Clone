import React from 'react';
import './Style.css';

const FeaturedMovie = ({item}) =>{
    let firstDate = new Date(item.first_air_date);

    let genres= [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let descr = item.overview;
    if(descr.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }

    return(
        <div className='Featured'
            style={{
                backgroundSize: 'cover',
                backgroundPosition:'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}
        >
            <div className='featured-vertical'>
                <div className='featured-horizontal'>
                    <h3 className='title'>{item.original_name}</h3>
                    <div className='info'>
                        <div className='point'>{item.vote_average} points</div>
                        <div>{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='description'>{descr}</div>
                    <div className='buttons'>
                        <a href={`/watch/${item.id}`} className="featured-watchbutton">► View</a>
                        <a href={`/list/add/${item.id}`} className="featured-mylistbutton">+ My List</a>
                    </div>
                    <div className='genres'>Genres: {genres.join(', ')}</div>
                </div>
            </div>
            
        </div>
    )
}

export default FeaturedMovie