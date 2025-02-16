import React, { useState } from 'react';
import './Tag.css'; // Import the Tag-specific CSS
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);

  const handleInputChange = (e) => setTag(e.target.value);

  return (
    <div className="tag-container">
      <h1 className="heading">Search By Tag</h1>

      <div className="gif-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <img
            src={gif}
            alt="Gif By Tag"
            className="gif"
          />
        )}
      </div>

      <input
        type="text"
        value={tag}
        onChange={handleInputChange}
        placeholder="Enter a tag"
        className="tag-input"
      />

      <button
        onClick={() => fetchData(tag)}
        className="generate-button"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
