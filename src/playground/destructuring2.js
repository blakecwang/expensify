console.log('destructuring2')

const address = ['11064 Viacha Dr', 'San Diego', 'CA', '92124']
const [, city, state] = address

console.log(`You are in ${city}, ${state}.`)
