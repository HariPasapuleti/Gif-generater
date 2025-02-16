import React from 'react';
import './Random.css'; // Import the Random-specific CSS
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="random-container">
      <h1 className="heading">A Random Gif</h1>

      <div className="gif-container">
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={gif}
            alt="Random Gif"
            className="gif"
          />
        )}
      </div>

      <button
        onClick={() => fetchData()}
        className="generate-button"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
