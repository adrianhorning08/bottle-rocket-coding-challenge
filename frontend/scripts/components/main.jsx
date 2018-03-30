import React from 'react';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return null;
  }
}

export default Main;
