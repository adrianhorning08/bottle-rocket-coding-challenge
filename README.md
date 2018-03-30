# bottle-rocket-coding-challenge



Instructions:

Download and run "npm install" to install dependencies and then "npm run start"


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
