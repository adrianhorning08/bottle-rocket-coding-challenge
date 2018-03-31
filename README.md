# bottle-rocket-coding-challenge

Instructions:

Download and run "npm install" to install dependencies and then "npm run start"

* I downloaded the font for free online I think they may have some built in padding, so it may be a little off

List View and Detail View need to be on the same page.
In react, they would both exist at root? Or would they have different urls?
How would you hide it, then animate it with css?


Component List
-RestaurantIndex
-RestaurantIndexItem
-RestaurantDetail
-Header(presentational)
-DetailTitle
-DetailContent

-Use CSS Grid!!


Use fetch to get the JSON
Use async/await

maybe this? ->
async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)
