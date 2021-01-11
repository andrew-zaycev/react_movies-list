import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList arr={moviesFromServer} />
      </div>

    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);