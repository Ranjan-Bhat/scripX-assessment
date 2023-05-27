import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowList = () => {
  const params = useParams();
  console.log("params", params.showName);  
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${params.showName}`);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShows();
  }, [params.showName]);

  return (
    <div >
        <ol>
            {shows.map((show) => (
                <li key={show.show.id}>
                    <div  className='list'>
                        <div>
                            <strong>Name:</strong> <Link to={`/tv-shows/details/${show.show.id}`}> {show.show.name}</Link>
                        </div>
                        <div>
                            <strong>Language:</strong> {show.show.language}
                        </div>
                        <div>
                            <strong>Genres:</strong> {show.show.genres.length ? show.show.genres.join(', ') : 'Unknown' }
                        </div>
                        <div>
                            <strong>Runtime:</strong> {show.show.runtime ? show.show.runtime : 'Unknown'} minutes
                        </div>
                        <div>
                            <strong>Premiered:</strong> {new Date(show.show.premiered).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                        
                        <div>
                            <strong>Rating:</strong> {show.show.rating.average ? show.show.rating.average : 'Unknown'}
                        </div>
                        <div>
                            <strong>Country:</strong> {show.show.network ? show.show.network.country.name : 'Unknown'}
                        </div>
                        {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
                    
                    </div>
                </li>
        ))}
        </ol>
      
    </div>
  );
};

export default ShowList;
