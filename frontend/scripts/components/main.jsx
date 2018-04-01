import React from 'react';
import Drawer from 'react-motion-drawer';
import Map from './Map';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      restaurant: null
    };
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  handleRestaurantClick(restaurant, e) {
    this.setState({ open: true, restaurant});
    document.getElementById('back-icon').style.visibility = "visible";
  }

  handleBackClick() {
    this.setState({ open: false});
    document.getElementById('back-icon').style.visibility = "hidden";
  }

  render() {
    if (this.props.restaurants.length > 0) {
      const indexItems =  this.props.restaurants.map((restaurant,idx) => {
        return <section
          className="restaurant-index-item"
          value={restaurant.name}
          key={idx}
          onClick={this.handleRestaurantClick.bind(this, restaurant)}
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
          >
          {val => {
            return (
              <div className="drawer">
                <header>
                  <div className="header-contents">
                    <div id="back-icon" onClick={this.handleBackClick}></div>
                    <h1>Lunch Tyme</h1>
                    <div className="map-icon"></div>
                  </div>
                </header>
                <Map
                  containerElement={<div id="map-container"></div>}
                  mapElement={<div id="map"></div>}
                  />
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
