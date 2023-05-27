import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const paramsDetail = useParams();
  console.log("paramsDetail", paramsDetail); 
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      const showId = parseInt(paramsDetail.showId);

      if (isNaN(showId)) {
        // Handle invalid ID, return 500 status code or show an error message
        return;
      }

      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${paramsDetail.showId}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Error: ",error);
      }
    };

    fetchShowDetails();
  }, [paramsDetail.showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='list'>
      <div>
        <strong>Name:</strong> {show.name}
      </div>
      <div>
        <strong>Language:</strong> {show.language}
      </div>
      <div>
        <strong>Genres:</strong> {show.genres.join(', ')}
      </div>
      <div>
        <strong>Runtime:</strong> {show.runtime} minutes
      </div>
      <div>
        <strong>Premiered:</strong> {new Date(show.premiered).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>
      <div>
        <strong>Rating:</strong> {show.rating.average ? show.rating.average : 'Unknown'}
      </div>
      <div>
        <strong>Country:</strong> {show.network ? show.network.country.name : 'Unknown'}
      </div>
      {show.image && <img src={show.image.medium} alt={show.name} />}
    </div>
  );
};

export default ShowDetails;
