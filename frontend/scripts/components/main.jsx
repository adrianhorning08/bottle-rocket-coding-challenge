import React from 'react';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    if (this.props.restaurants) {
      return 'hey';
    } else {
      return null;
    }
  }
}

export default Main;
