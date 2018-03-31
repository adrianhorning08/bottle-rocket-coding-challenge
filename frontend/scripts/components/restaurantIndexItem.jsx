import React from 'react';

const RestaurantIndexItem = props => {
  return (
    <section className="restaurant-index-item"
      style={
        {
          backgroundImage: `url("http://res.cloudinary.com/dqw6az5ot/image/upload/v1522533459/cellGradientBackground_2x.png"),
          url(${props.restaurant.backgroundImageURL})`
        }
      }>
      <div className="restaurant-index-item-text">
        <h2>{props.restaurant.name}</h2>
        <h3>{props.restaurant.category}</h3>
      </div>
    </section>
  );
};

export default RestaurantIndexItem;
