import React from 'react';
import Drawer from 'react-motion-drawer';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
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
    const Map = compose(
      withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: Number(this.state.restaurant.location.lat),
                         lng: Number(this.state.restaurant.location.lng)}}
      >
        <Marker
          position={{ lat: Number(this.state.restaurant.location.lat),
                      lng: Number(this.state.restaurant.location.lng)}}
          onClick={props.onToggleOpen}
        >
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div className="info-box">
              {this.state.restaurant.location.formattedAddress.map((address,idx) => {
                return <p key={idx}>{address}</p>;
              })}
            </div>
          </InfoWindow>}
        </Marker>
      </GoogleMap>
    );

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
        return <div
          className="restaurant-index-item"
          value={restaurant.name}
          key={idx}
          onClick={this.handleRestaurantClick.bind(this, restaurant)}
          >
          <div className="restaurant-index-item-text">
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.category}</h3>
          </div>
          <img className="top" src={"http://res.cloudinary.com/dqw6az5ot/image/upload/v1522533459/cellGradientBackground_2x.png"}/>
          <img className="bottom" src={`${restaurant.backgroundImageURL}`}/>
        </div>;
      });
      return (
        <div className="main">
        <div className="main-container">
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
                    <div className="back-icon" onClick={this.handleBackClick}>
                      <img src="http://res.cloudinary.com/dqw6az5ot/image/upload/v1522614909/ic_webBack_2x.png"></img>
                    </div>
                    <h1>Lunch Tyme</h1>
                    <div className="map-icon">
                      <img src="http://res.cloudinary.com/dqw6az5ot/image/upload/v1522614719/icon_map_2x.png"></img>
                    </div>
                  </div>
                </header>
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuBcjx8q63oAgLk3_4UC0397Kh3d_9LkI"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `160px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              <div className="restaurant-detail-header">
                <div className="detail-header-contents">
                  <h2>{this.state.restaurant.name}</h2>
                  <h3>{this.state.restaurant.category}</h3>
                </div>
              </div>
              <div className="restaurant-detail-text">
                <div className="detail-text-contents">
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
              </div>
            );
          }}
          </Drawer>
          {indexItems}
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default Main;
