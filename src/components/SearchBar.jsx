import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import fetchSearch from '../services/api';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    setSearchInput('');
    const results = await fetchSearch(searchInput);
    dispatch({type: 'SEARCH', payload: searchInput});
    dispatch({type: 'SEARCH_RESULTS', payload: results});
  };

  return (
    <div>
      <form onSubmit={ onSubmit }>
        <label htmlFor="search">Search:</label>
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search" id="search" />
        <button type="submit" onSubmit={ onSubmit }>Search</button>
      </form>
    </div>
  );
}
