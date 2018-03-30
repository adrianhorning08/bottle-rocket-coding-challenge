// export const fetchData = () => {
//   return fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
//     .then(res => console.log(res));
// };

export const fetchData = () => {
  return $.ajax({
    url: 'https://s3.amazonaws.com/br-codingexams/restaurants.json'
  });
};
