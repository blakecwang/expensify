console.log('I promise')

// https://javascript.info/promise-basics

// executor = function passed to new Promise()
// any state change is final - so executor can only call one resolve() or one reject()
// resolve and reject are provided by JavaScript
// - further resolve/reject calls are ignored
//
// promise.state
// - pending
// - settled
//   - fulfilled
//   - rejected
//
// promise.result
// - undefined (initially)
// - value passed to resolve
// - error passed to reject
//
// - use .then/.catch/.finally to access the (internal) promise's internal state
//
// to only handle result (success)
// .then(successHandler)
//
// to only handle rejection (failure)
// .then(null, errorHandler) or
// .catch(errorHandler)


///////////////////


//let fulfilledPromise = new Promise((resolve, reject) => {
//  setTimeout(() => resolve('done'), 1000)
//})
//
//let rejectedPromise = new Promise((resolve, reject) => {
//  setTimeout(() => reject(new Error('Whoops!')), 1000)
//})
//
//fulfilledPromise.then(
//  result => console.log(result),
//  error => console.log(error)
//)
//// is the same as...
//fulfilledPromise.then(console.log)
//
//rejectedPromise.then(
//  result => console.log(result),
//  error => console.log(error)
//)
//// is the same as...
//rejectedPromise.catch(console.log)


// Returning promises allows us to build chains of asynchronous actions.
new Promise((resolve, reject) => {

  setTimeout(() => resolve(1), 1000);

}).then(result => {

  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(result => { // (**)

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(result => {

  console.log(result); // 4

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000)
  })

}).then(result => {

  console.log(result); // 4

})

console.log('take 2')

new Promise(resolve => resolve(1)).then(result => {
  console.log('take 2', result)
  return result * 2
}).then(result => {
  console.log('take 2', result)
  return result * 2
}).then(result => {
  console.log('take 2', result)
  return result * 2
}).then(result => {
  console.log('take 2', result)
})
