import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchRestaurants } from './util/restaurants_api';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.fetchRestaurants = fetchRestaurants;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
