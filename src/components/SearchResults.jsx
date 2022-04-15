import React from 'react';
import { useSelector } from 'react-redux';

export default function SearchResults() {
  const searchResults = useSelector(({youtubeReducer}) => youtubeReducer.searchResults.items);
  console.log(searchResults);
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults?.map(element => (
          <li key={element.id.videoId}>
            <a href={`/video/${element.id.videoId}`}>
              <img alt={element.id.videoId} src={`https://img.youtube.com/vi/${element.id.videoId}/0.jpg`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
