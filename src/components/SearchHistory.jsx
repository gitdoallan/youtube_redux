import React from 'react';
import { useSelector } from 'react-redux';

export default function SearchHistory() {
  const searchHistory = useSelector(({youtubeReducer}) => youtubeReducer.searchHistory);

  return (
    <div>
      <h1>Search History</h1>
      <ul>
        {searchHistory.map(element => (
          <li key={element}>
              {element}
          </li>
        ))}
      </ul>
    </div>
  );
}