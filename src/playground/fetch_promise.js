console.log('fetch')

const fetch = require('node-fetch')

fetch('https://google.com')
  .then(res => res.text())
  .then(text => console.log(text.slice(0,15)))

// As a good practice, an asynchronous action should always return a promise

fetch('https://no-such-site')
  .then(res => res.json())
  .catch(err => console.log('Whoops!', err))


new Promise((resolve, reject) => {
  throw Error('There is "invisible" try/catch going on here!')
}).catch(err => console.log(err))


new Promise((resolve, reject) => {
  resolve('all good')
}).then(res => {
  console.log(res)
  throw Error('There is "invisible" try/catch inside .then handler too!')
}).catch(err => console.log(err))

