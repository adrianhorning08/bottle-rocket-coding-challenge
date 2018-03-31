import React from 'react';
import RestaurantIndexItem from './restaurantIndexItem';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    if (this.props.restaurants.length > 0) {
      return this.props.restaurants.map((restaurant,idx) => {
        return <RestaurantIndexItem
                restaurant={restaurant}
                key={idx}
                />;
      });
    } else {
      return null;
    }
  }
}

export default Main;
