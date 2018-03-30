import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { fetchRestaurants } from '../actions/restaurant_actions';

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
