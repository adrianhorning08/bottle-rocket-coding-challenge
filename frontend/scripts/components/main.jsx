import React from 'react';
import Drawer from 'react-motion-drawer';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      restaurant: {
        location: {
          lat: null,
          lng: null
        }
      }
    };
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  handleRestaurantClick(restaurant, e) {
    this.setState({ open: true, restaurant});
  }

  handleBackClick() {
    this.setState({ open: false});
  }

  render() {
    const Map = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: +this.state.restaurant.location.lat,
                         lng: +this.state.restaurant.location.lng }}
      >
        <Marker
          position={{ lat: +this.state.restaurant.location.lat,
                      lng: +this.state.restaurant.location.lng }}
        />
      </GoogleMap>
    ));

    if (this.props.restaurants.length > 0) {

      let phone = null;
      let twitter = null;
      if (this.state.restaurant.contact) {
        phone =
          <div className="contact">
            <p>{this.state.restaurant.contact.formattedPhone}</p>
          </div>;
          if (this.state.restaurant.contact.twitter) {
            twitter =
            <div className="contact">
              <p>@{this.state.restaurant.contact.twitter}</p>
            </div>;
          }
      }

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
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuBcjx8q63oAgLk3_4UC0397Kh3d_9LkI"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `160px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              <div className="restaurant-deail-header">
                <h2>{this.state.restaurant.name}</h2>
                <h3>{this.state.restaurant.category}</h3>
              </div>
              <div className="restaurant-deail-text">
                <div className="address">
                  <p>{this.state.restaurant.location.address}</p>
                  <p>{this.state.restaurant.location.city},
                      {this.state.restaurant.location.state}
                      {` `}
                      {this.state.restaurant.location.postalCode}</p>
                  </div>
                    {phone}
                    {twitter}
                </div>
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
