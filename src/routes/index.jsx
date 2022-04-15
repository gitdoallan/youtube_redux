import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Video from '../pages/Video';
import SearchHistory from '../pages/SHistory';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<Video />} />
      <Route path="search-history" element={<SearchHistory />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}
