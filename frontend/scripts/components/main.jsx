import React from 'react';
import Drawer from 'react-motion-drawer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      restaurantName: null
    };
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  handleClick(restaurant, e) {
    console.log(restaurant);
    this.setState({ open: !false});
  }

  render() {
    if (this.props.restaurants.length > 0) {
      const indexItems =  this.props.restaurants.map((restaurant,idx) => {
        return <section
          className="restaurant-index-item"
          value={restaurant.name}
          key={idx}
          onClick={this.handleClick.bind(this, restaurant)}
          style={
            {
              backgroundImage: `url("http://res.cloudinary.com/dqw6az5ot/image/upload/v1522533459/cellGradientBackground_2x.png"),
              url(${restaurant.backgroundImageURL})`
            }
          }>
          <div className="restaurant-index-item-text">
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.category}</h3>
          </div>
        </section>;
      });
      return (
        <div>
          <Drawer
            width={"100%"}
            right={true}
            fadeOut={true}
            open={this.state.open}
            onChange={open => this.setState({ open: !false })}
          >
          {val => {
            return (
              <div className="drawer">
                <header>
                  <div className="header-contents">
                    <div className="back-icon"></div>
                    <h1>Lunch Tyme</h1>
                    <div className="map-icon"></div>
                  </div>
                </header>
              </div>
            );
          }}
          </Drawer>
          {indexItems}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Main;
