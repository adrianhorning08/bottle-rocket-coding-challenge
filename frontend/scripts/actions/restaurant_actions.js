import * as APIutil from '../util/restaurants_api';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

export const fetchRestaurants = () => dispatch => {
  return APIutil.fetchRestaurants().then(serverRestaurants =>
    dispatch(receiveRestaurants(serverRestaurants)));
};

const receiveRestaurants = restaurants => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  };
};
