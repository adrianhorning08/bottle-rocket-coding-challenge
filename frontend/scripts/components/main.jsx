import React from 'react';
import Drawer from 'react-motion-drawer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const drawer = <Drawer
      width={300}
      fadeOut={true}
      open={this.state.open}
      onChange={open => this.setState({ open: open })}
      />;
    if (this.props.restaurants.length > 0) {
      const indexItems =  this.props.restaurants.map((restaurant,idx) => {
        return <section
          className="restaurant-index-item"
          key={idx}
          onClick={() => this.setState({ open: !false})}
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
          {drawer}
          {indexItems}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Main;
