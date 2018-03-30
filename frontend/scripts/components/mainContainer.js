import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { fetchRestaurants } from '../actions/restaurant_actions';

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
