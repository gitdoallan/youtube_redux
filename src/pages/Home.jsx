import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchHistory from '../components/SearchHistory';
import SearchResults from '../components/SearchResults';

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchResults />
      <SearchHistory />

      <h1>Home</h1>
    </div>
  );
}
