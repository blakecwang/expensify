const fetch = require('node-fetch')

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('https://google.com/does-not-exist-at-google')
  .catch(console.log); // Error: 404


//////// rewrite ////////


const myLoadJson = async (url) => {
  const response = await fetch(url);

  if (response.status == 200) {
    const json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

myLoadJson('https://google.com/does-not-exist-at-google');
