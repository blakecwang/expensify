console.log('destructuring')

const person = {
  name: 'Blake',
  age: 30,
  location: {
    city: 'San Diego',
    temperature: 75
  }
}

const { name: firstName = 'Anonymous', age } = person
const { city, temperature: temp } = person.location

console.log(`${firstName} is ${age}.`)
console.log(`It's ${temp} in ${city}.`)

console.log('-')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'self published' } = book.publisher

console.log(publisherName)
