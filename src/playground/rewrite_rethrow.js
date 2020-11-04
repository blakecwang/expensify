const fetch = require('node-fetch')

const name = "iliakan";
const ghUrl = "https://api.github.com/users";
//const ghUrl = "https://some-bad-thing";

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

function demoGithubUser() {
  return loadJson(`${ghUrl}/${name}`)
    .then(user => {
      console.log(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("No such user, please reenter.");
      } else {
        throw err;
      }
    });
}

demoGithubUser();


/////////////// rewrite ///////////////


class MyHttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'MyHttpError';
    this.response = response;
  }
}

const myLoadJson = async (url) => {
  const response = await fetch(url);

  if (response.status == 200) {
    const json = await response.json();
    return json;
  }

  throw new MyHttpError(response);
}

const myDemoGithubUser = async () => {
  try {
    const user = await myLoadJson(`${ghUrl}/${name}`)
    console.log(`Full name: ${user.name}.`);
  } catch(err) {
    if (err instanceof MyHttpError && err.response.status == 404) {
      console.log("No such user, please reenter.");
    } else {
      throw err;
    }
  }
}
 
myDemoGithubUser();
