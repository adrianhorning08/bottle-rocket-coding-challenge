import React from 'react';

const RestaurantIndexItem = props => {
  return (
    <section className="restaurant-index-item"
      style={{ backgroundImage: `url(${props.restaurant.backgroundImageURL})`}}>
      <div className="restaurant-index-item-text">
        <h2>{props.restaurant.name}</h2>
        <h3>{props.restaurant.category}</h3>
      </div>
    </section>
  );
};

export default RestaurantIndexItem;
