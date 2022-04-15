import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function Video() {
  const param = useParams();
  const videoId = param.id;

  return (
    <div>
      <Header />
      <h1>Video: {videoId}</h1>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}