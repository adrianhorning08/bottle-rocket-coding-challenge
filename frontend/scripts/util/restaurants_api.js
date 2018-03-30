export const fetchRestaurants = () => {
  return $.ajax({
    url: 'https://s3.amazonaws.com/br-codingexams/restaurants.json'
  });
};
