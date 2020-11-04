const fetch = require('node-fetch')

// async functions always return a myPromise
// await works only inside async functions

//const myAsyncFunc = async () => {
//  const myPromise = new Promise((resolve, reject) => {
//    setTimeout(() => resolve('done'), 0)
//  })
//  const result = await myPromise
//
//  console.log(result)
//}
//
//myAsyncFunc()
//console.log('this will print first');
//
//(async () => {
//  const myPromise = new Promise((resolve, reject) => {
//    resolve('fin')
//  });
//  const result = await myPromise
//
//  console.log(result)
//})();

class TheSweetness {
  async sweetMethodBro() {
    const promise = new Promise((resolve, reject) => {
      resolve('done!!!')
    });
    return await promise;
  }
}

// option A
new TheSweetness().sweetMethodBro().then(console.log);

// option B (same thing)
(async () => {
  const res = await new TheSweetness().sweetMethodBro()
  console.log(res)
})();



// option A
const doomed = async () => {
  return await fetch('https://no-such-url');
};
doomed().catch(console.log);

// option B (same thing)
const doomedToo = async () => {
  try {
    await fetch('https://no-such-url');
  } catch(err) {
    console.log(err)
  }
};
doomedToo();

(async () => {
  try {
//    let res = await Promise.all([
//      fetch('https://google.com')
//      fetch('https://bad-site-123')
//    ]);
    let res = await fetch('https://google.com');
    let text = await res.text();
    console.log('HOORAY!', text.slice(0,15));
  } catch(err) {
    console.log('OOPS!!', err);
  }
})()
