import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">Youtubinho</Link>
      <Link to="/search-history/">Search History</Link>
    </div>
  );
}